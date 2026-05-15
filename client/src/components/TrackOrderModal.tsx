import { X, MessageCircle } from 'lucide-react';
import '../styles/track-order-modal.css';

interface TrackOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrackOrderModal({ isOpen, onClose }: TrackOrderModalProps) {
  if (!isOpen) return null;

  const whatsappUrl = 'https://wa.me/94700000000?text=Hi%2C%20I%27d%20like%20to%20track%20my%20project%20status.%20My%20Order%20ID%20is%3A%20';

  return (
    <>
      <div className="track-overlay" onClick={onClose}></div>

      <div className="track-modal">
        <div className="track-header">
          <h2>Track Your Project</h2>
          <button className="track-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="track-content">
          <div className="track-whatsapp-info">
            <div className="track-icon-wrap">
              <MessageCircle size={48} strokeWidth={1.5} />
            </div>
            <h3>Check Your Status via WhatsApp</h3>
            <p>
              To get a real-time update on your project, message us on WhatsApp with your <strong>Order ID</strong> (found in your confirmation email) and we'll reply instantly.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={20} />
              Message Us on WhatsApp
            </a>
            <p className="track-note">
              ⚡ We typically respond within <strong>30 minutes</strong> during business hours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
