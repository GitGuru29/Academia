import { useState } from 'react';
import { X, Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { OrderContext } from '@/App';
import '../styles/order-drawer.css';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialContext?: OrderContext;
}

interface OrderFormData {
  title: string;
  deadline: string;
  description: string;
  university: string;
  contactName: string;
  whatsapp: string;
  email: string;
  agreed: boolean;
  files: File[];
}

const defaultFormData: OrderFormData = {
  title: '',
  deadline: '',
  description: '',
  university: '',
  contactName: '',
  whatsapp: '',
  email: '',
  agreed: false,
  files: [],
};

const TOTAL_STEPS = 2;

export default function OrderDrawer({ isOpen, onClose, initialContext }: OrderDrawerProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<OrderFormData>(defaultFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState<string>('');

  const validateStep = (stepNum: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (stepNum === 1) {
      if (!formData.title.trim()) newErrors.title = 'Project title is required';
      if (!formData.deadline) newErrors.deadline = 'Deadline is required';
      if (!formData.description.trim()) newErrors.description = 'Description is required';
      if (!formData.university.trim()) newErrors.university = 'University name is required';
    } else if (stepNum === 2) {
      if (!formData.contactName.trim()) newErrors.contactName = 'Full name is required';
      if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp number is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
      if (!formData.agreed) newErrors.agreed = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + formData.files.length > 5) {
      setErrors({ ...errors, files: 'Maximum 5 files allowed' });
      return;
    }
    setFormData({ ...formData, files: [...formData.files, ...files] });
    setErrors({ ...errors, files: '' });
  };

  const handleRemoveFile = (index: number) => {
    setFormData({ ...formData, files: formData.files.filter((_, i) => i !== index) });
  };

  const handleSubmit = async () => {
    if (!validateStep(2)) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      let attachmentLinks: string[] = [];

      // Step 1: Upload files to Cloudinary
      if (formData.files.length > 0) {
        setUploadingFiles(true);
        const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
        const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

        if (!cloudName || !uploadPreset) {
          throw new Error('File upload is not configured. Please contact support.');
        }

        const uploadPromises = formData.files.map(async (file) => {
          const data = new FormData();
          data.append('file', file);
          data.append('upload_preset', uploadPreset);

          const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
            method: 'POST',
            body: data,
          });

          if (!res.ok) {
            const err = await res.json();
            throw new Error(err.error?.message || 'File upload failed');
          }

          const json = await res.json();
          return json.secure_url as string;
        });

        attachmentLinks = await Promise.all(uploadPromises);
        setUploadingFiles(false);
      }

      // Step 2: Generate order reference
      const generatedOrderId = `ORD-${Date.now().toString(36).toUpperCase()}`;

      // Step 3: Send via Brevo serverless function
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          order_id: generatedOrderId,
          tier: initialContext?.tier || 'General Inquiry',
          service: initialContext?.service || 'Not specified',
          project_title: formData.title,
          deadline: formData.deadline,
          university: formData.university,
          description: formData.description,
          contact_name: formData.contactName,
          whatsapp: formData.whatsapp,
          reply_to: formData.email,
          attachments: attachmentLinks.length > 0 ? attachmentLinks.join('\n') : 'None',
        }),
      });

      const result = await res.json();
      if (!result.success) throw new Error(result.error || 'Submission failed');

      setOrderId(generatedOrderId);
      setSubmitted(true);
      toast.success('Project request submitted!');

      setTimeout(() => {
        onClose();
        setStep(1);
        setFormData(defaultFormData);
        setSubmitted(false);
        setOrderId('');
      }, 4000);
    } catch (error: any) {
      console.error('Submission error:', error);
      setErrors({ submit: error.message || 'Something went wrong. Please try again.' });
      toast.error(error.message || 'Submission failed');
    } finally {
      setIsSubmitting(false);
      setUploadingFiles(false);
    }
  };

  if (!isOpen) return null;

  const submitLabel = uploadingFiles
    ? 'Uploading Files...'
    : isSubmitting
    ? 'Submitting...'
    : 'Submit Request →';

  const stepLabels = ['Project Details', 'Your Info'];

  return (
    <>
      <div className="order-overlay" onClick={onClose}></div>

      <div className="order-drawer">
        {/* Header */}
        <div className="order-header">
          <div className="order-title">
            <h2>Get Project Support</h2>
            <p className="order-step">{stepLabels[step - 1]} · Step {step} of {TOTAL_STEPS}</p>
          </div>
          <button className="order-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="order-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}></div>
          </div>
        </div>

        {/* Content */}
        <div className="order-content">
          {submitted ? (
            <div className="order-success">
              <div className="success-icon">
                <CheckCircle size={64} />
              </div>
              <h3>Request Submitted!</h3>
              <p>Your reference: <span className="order-id">{orderId}</span></p>
              <p className="success-message">
                We'll WhatsApp you within 2 hours with a quote and next steps.
              </p>
            </div>
          ) : (
            <>
              {/* Step 1: Project Details */}
              {step === 1 && (
                <div className="order-step-content">
                  <h3>Project Details</h3>
                  <div className="form-group">
                    <label>Project Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Enter your project title"
                      className={errors.title ? 'error' : ''}
                    />
                    {errors.title && <p className="error-message">{errors.title}</p>}
                  </div>
                  <div className="form-group">
                    <label>Deadline</label>
                    <input
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className={errors.deadline ? 'error' : ''}
                    />
                    {errors.deadline && <p className="error-message">{errors.deadline}</p>}
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your project requirements in detail"
                      rows={4}
                      className={errors.description ? 'error' : ''}
                    ></textarea>
                    {errors.description && <p className="error-message">{errors.description}</p>}
                  </div>
                  <div className="form-group">
                    <label>University</label>
                    <input
                      type="text"
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      placeholder="Your university or institution"
                      className={errors.university ? 'error' : ''}
                    />
                    {errors.university && <p className="error-message">{errors.university}</p>}
                  </div>
                  <div className="form-group">
                    <label>Attach Files (Optional)</label>
                    <div className="file-upload-zone">
                      <Upload size={32} />
                      <p>Drop files here or click to browse</p>
                      <input type="file" multiple onChange={handleFileChange} className="file-input" />
                    </div>
                    {formData.files.length > 0 && (
                      <div className="file-list">
                        {formData.files.map((file, index) => (
                          <div key={index} className="file-item">
                            <span>{file.name}</span>
                            <button onClick={() => handleRemoveFile(index)} className="file-remove">×</button>
                          </div>
                        ))}
                      </div>
                    )}
                    {errors.files && <p className="error-message">{errors.files}</p>}
                  </div>
                </div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <div className="order-step-content">
                  <h3>Contact Information</h3>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="Your full name"
                      className={errors.contactName ? 'error' : ''}
                    />
                    {errors.contactName && <p className="error-message">{errors.contactName}</p>}
                  </div>
                  <div className="form-group">
                    <label>WhatsApp Number</label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+94 7X XXX XXXX"
                      className={errors.whatsapp ? 'error' : ''}
                    />
                    {errors.whatsapp && <p className="error-message">{errors.whatsapp}</p>}
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                  </div>
                  <div className="form-group checkbox">
                    <input
                      type="checkbox"
                      id="agreed"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    />
                    <label htmlFor="agreed">
                      I understand this service is strictly confidential
                    </label>
                    {errors.agreed && <p className="error-message">{errors.agreed}</p>}
                  </div>
                  {errors.submit && (
                    <div className="error-banner">
                      <AlertCircle size={20} />
                      <span>{errors.submit}</span>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {!submitted && (
          <div className="order-footer">
            <button className="btn-back" onClick={handleBack} disabled={step === 1}>
              Back
            </button>
            {step < TOTAL_STEPS ? (
              <button className="btn-next" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button className="btn-submit" onClick={handleSubmit} disabled={isSubmitting}>
                {submitLabel}
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
