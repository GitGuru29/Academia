import { useRef } from 'react';
import { ArrowRight, CheckCircle, Zap, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/hero.css';

interface HeroProps {
  onSubmitClick: () => void;
  onTrackClick: () => void;
}

export default function Hero({ onSubmitClick, onTrackClick }: HeroProps) {
  return (
    <section className="hero" id="hero">
      <div className="hero-gradient-mesh"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          {/* Eyebrow Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-eyebrow"
          >
            <span className="eyebrow-dot"></span>
            <span>Technical Project Consulting · Sri Lanka</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hero-headline"
          >
            Stop struggling.<br />
            <span className="gradient-text">Start delivering.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="hero-subtext"
          >
            We provide hands-on technical consulting and implementation support for university projects, FYPs, and assignments. You bring the brief — we bring the expertise.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="hero-ctas"
          >
            <button className="cta-primary" onClick={onSubmitClick}>
              Get project support <ArrowRight size={18} />
            </button>
            <button className="cta-ghost" onClick={onTrackClick}>
              See how we work
            </button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-trust"
          >
            <div className="trust-item">
              <Lock size={16} />
              <span>Strictly confidential</span>
            </div>
            <div className="trust-divider">·</div>
            <div className="trust-item">
              <Zap size={16} />
              <span>Response within 2hrs</span>
            </div>
            <div className="trust-divider">·</div>
            <div className="trust-item">
              <CheckCircle size={16} />
              <span>Revisions included</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Card */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.4 }}
          className="hero-stats"
        >
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="stats-card"
          >
            <div className="stat-item">
              <div className="stat-value">127</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">98%</div>
              <div className="stat-label">On-time Rate</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">4.2d</div>
              <div className="stat-label">Avg Delivery</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
