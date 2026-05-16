import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoUrl from '../assets/logo.png';
import '../styles/navbar.css';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Support Areas', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Track Project', href: '#track' },
];

export default function Navbar({ onSubmitClick }: { onSubmitClick: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoUrl} alt="Academia Logo" className="logo-image" />
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links-desktop">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="nav-link"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onSubmitClick}
          className="navbar-btn"
        >
          Get support →
        </button>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="mobile-nav-link"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onSubmitClick();
              setIsMobileMenuOpen(false);
            }}
            className="mobile-btn-submit"
          >
            Get support →
          </button>
        </div>
      )}
    </nav>
  );
}
