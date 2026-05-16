import { Mail, Phone, Instagram } from 'lucide-react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Tagline */}
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-text">
              Academic<span className="logo-accent">.</span>
            </span>
          </div>
          <p className="footer-tagline">Technical project consulting for university students</p>
          <p className="footer-subtext" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Confidential · Professional · On time</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#services">Support Areas</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#track">Track Project</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4 className="footer-title">Contact</h4>
          <div className="footer-contact">
            <a href="https://wa.me/94787345430" className="contact-link">
              <Phone size={18} />
              <span>WhatsApp</span>
            </a>
            <a href="mailto:academiacsupport@gmail.com" className="contact-link">
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a href="#" className="contact-link">
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Academic. · All client engagements are strictly confidential</p>
      </div>
    </footer>
  );
}
