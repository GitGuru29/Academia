import { useEffect } from 'react';
import '../styles/legal.css';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: May 2026</p>

        <section>
          <h2>1. Who We Are</h2>
          <p>
            Academic. ("we", "us", "our") is a technical project consulting service based in Sri Lanka, operating at academia-ten.vercel.app.
          </p>
        </section>

        <section>
          <h2>2. What Information We Collect</h2>
          <p>When you submit a project brief or contact us, we collect:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>WhatsApp number</li>
            <li>University name</li>
            <li>Project details and uploaded files</li>
          </ul>
          <p>
            We do not collect payment information directly — payments are processed via bank transfer or third-party processors.
          </p>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information solely to:</p>
          <ul>
            <li>Process and deliver your project brief</li>
            <li>Send you quotes, updates, and delivery notifications</li>
            <li>Respond to your enquiries</li>
          </ul>
          <p>
            We do not sell, share, rent, or disclose your personal information to any third party under any circumstances.
          </p>
        </section>

        <section>
          <h2>4. File Storage</h2>
          <p>
            Files you upload are stored securely via Cloudinary. They are only accessed by our internal team for the purpose of completing your project. Files are deleted from our systems within 60 days of project completion upon request.
          </p>
        </section>

        <section>
          <h2>5. Confidentiality</h2>
          <p>
            Every client engagement is strictly confidential. Your name, university, project details, and delivered work will never be shared, published, or referenced publicly in any form without your explicit written consent.
          </p>
        </section>

        <section>
          <h2>6. Cookies</h2>
          <p>
            We use minimal cookies for basic site functionality and anonymous analytics only. We do not use tracking cookies or third-party advertising cookies.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the data we hold about you</li>
            <li>Request deletion of your data at any time</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>To exercise any of these rights, contact us via WhatsApp or email.</p>
        </section>

        <section>
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Continued use of our service constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>For any privacy-related concerns:</p>
          <p><strong>WhatsApp:</strong> +94 787345430</p>
          <p><strong>Email:</strong> academiacsupport@gmail.com</p>
        </section>
      </div>
    </main>
  );
}
