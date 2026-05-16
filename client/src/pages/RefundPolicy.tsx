import { useEffect } from 'react';
import '../styles/legal.css';

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>Refund Policy</h1>
        <p className="last-updated">Last updated: May 2026</p>

        <section>
          <h2>1. Our Commitment</h2>
          <p>
            We stand behind the quality of every delivery. If we fail to meet agreed terms, you are entitled to a full or partial refund as outlined below.
          </p>
        </section>

        <section>
          <h2>2. Full Refund</h2>
          <p>You are eligible for a full refund if:</p>
          <ul>
            <li>We fail to deliver before the agreed deadline</li>
            <li>We are unable to fulfill the agreed project scope</li>
            <li>You cancel within 2 hours of submitting your brief and before work has begun</li>
          </ul>
        </section>

        <section>
          <h2>3. Partial Refund</h2>
          <p>You are eligible for a 50% refund if:</p>
          <ul>
            <li>You cancel after work has begun but before delivery</li>
            <li>The delivered work substantially differs from the agreed brief and cannot be resolved through revisions</li>
          </ul>
        </section>

        <section>
          <h2>4. No Refund</h2>
          <p>No refund is issued if:</p>
          <ul>
            <li>Work has been delivered and accepted</li>
            <li>Revision requests have been fulfilled</li>
            <li>You change your requirements after delivery</li>
            <li>You provide incorrect or incomplete brief information that affects the output</li>
            <li>The project is cancelled after full delivery</li>
          </ul>
        </section>

        <section>
          <h2>5. Revision First Policy</h2>
          <p>
            Before a refund is considered, we will always attempt to resolve any issues through our included revision process. Refunds are a last resort, not a first response.
          </p>
        </section>

        <section>
          <h2>6. How to Request a Refund</h2>
          <p>Contact us via WhatsApp or email with:</p>
          <ul>
            <li>Your order ID</li>
            <li>Reason for refund request</li>
            <li>Any supporting details</li>
          </ul>
          <p>
            Refund requests are reviewed within 24 hours. Approved refunds are processed within 3-5 business days via the original payment method.
          </p>
        </section>

        <section>
          <h2>7. Contact</h2>
          <p><strong>WhatsApp:</strong> +94 787345430</p>
          <p><strong>Email:</strong> academiacsupport@gmail.com</p>
        </section>
      </div>
    </main>
  );
}
