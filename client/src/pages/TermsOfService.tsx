import { useEffect } from 'react';
import '../styles/legal.css';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last updated: May 2026</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By submitting a project brief or making payment to Academic., you agree to these Terms of Service in full. If you do not agree, do not use our services.
          </p>
        </section>

        <section>
          <h2>2. Services Provided</h2>
          <p>
            Academic. provides technical consulting, implementation support, and documentation services for university projects. All services are delivered digitally.
          </p>
        </section>

        <section>
          <h2>3. Payment Terms</h2>
          <ul>
            <li>A 50% deposit is required before work begins</li>
            <li>Remaining 50% is due upon delivery before files are released</li>
            <li>Accepted payment methods: bank transfer, PayPal</li>
            <li>All prices are quoted in LKR unless stated otherwise</li>
            <li>Quotes are valid for 48 hours from issue date</li>
          </ul>
        </section>

        <section>
          <h2>4. Delivery</h2>
          <ul>
            <li>Delivery timelines are agreed upon at the time of quoting</li>
            <li>We commit to delivering before your stated deadline</li>
            <li>Delivery is made via WhatsApp or email as agreed</li>
          </ul>
        </section>

        <section>
          <h2>5. Revisions</h2>
          <ul>
            <li>Revisions are included with every engagement</li>
            <li>Revision requests must be submitted within 48 hours of delivery</li>
            <li>Revisions cover corrections and adjustments to the original brief — they do not cover new requirements added after delivery</li>
          </ul>
        </section>

        <section>
          <h2>6. Client Responsibilities</h2>
          <p>The client is solely responsible for:</p>
          <ul>
            <li>Providing accurate and complete project requirements</li>
            <li>How delivered work is used after receipt</li>
            <li>Any academic, institutional, or legal consequences arising from the use of delivered work</li>
          </ul>
          <p>
            Academic. provides technical consulting services only. We bear no responsibility for academic submissions, academic integrity decisions, or their consequences. The client assumes full responsibility for any work submitted to their institution.
          </p>
        </section>

        <section>
          <h2>7. Intellectual Property</h2>
          <p>
            Upon full payment, the client receives full ownership of all delivered work. Academic. retains no rights to reuse, publish, or redistribute delivered work.
          </p>
        </section>

        <section>
          <h2>8. Confidentiality</h2>
          <p>
            We will never share your personal information, project details, or delivered work with any third party. This confidentiality obligation is permanent and survives termination of the service agreement.
          </p>
          <p>
            In return, clients agree not to publicly disclose, reverse engineer, or redistribute Academic.'s internal processes, templates, or proprietary methods.
          </p>
        </section>

        <section>
          <h2>9. Prohibited Use</h2>
          <p>You may not use our services to:</p>
          <ul>
            <li>Submit work that violates laws or regulations</li>
            <li>Produce content that is harmful, illegal, or malicious</li>
            <li>Circumvent any applicable institutional policies in jurisdictions where such services are prohibited</li>
          </ul>
        </section>

        <section>
          <h2>10. Limitation of Liability</h2>
          <p>
            Academic.'s total liability in any circumstance is limited to the amount paid for the specific engagement in question. We are not liable for indirect, consequential, or incidental damages of any kind.
          </p>
        </section>

        <section>
          <h2>11. Termination</h2>
          <p>
            We reserve the right to refuse or terminate any engagement at our discretion. In such cases, a full refund of any deposit paid will be issued.
          </p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>
            These terms are governed by the laws of Sri Lanka. Any disputes will be resolved under Sri Lankan jurisdiction.
          </p>
        </section>

        <section>
          <h2>13. Contact</h2>
          <p><strong>WhatsApp:</strong> +94 787345430</p>
          <p><strong>Email:</strong> academiacsupport@gmail.com</p>
        </section>
      </div>
    </main>
  );
}
