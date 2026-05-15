import { Lock, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/why-us.css';

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="why-us-container">
        {/* Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="why-us-header"
        >
          <span className="section-label">WHY US</span>
          <h2>Built by students who get it</h2>
        </motion.div>

        {/* Body */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="why-us-body"
        >
          <p>
            We're a small team of technical specialists who understand exactly what university project delivery looks like — because we've been through it. We don't offer generic tutoring or slow agency timelines. We offer fast, precise, technical support from people who know the stack, know the standards, and know what your university expects.
          </p>
          <p>
            Every project is handled with complete confidentiality. We never share your details, your work, or your brief with anyone outside our team.
          </p>
        </motion.div>

        {/* Trust Cards Grid */}
        <div className="why-us-grid">
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="why-us-card"
          >
            <div className="why-us-icon">
              <Lock size={24} />
            </div>
            <h3>Confidential by default</h3>
            <p>Your brief, your details, and your deliverables are never shared. Ever.</p>
          </motion.div>

          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="why-us-card"
          >
            <div className="why-us-icon">
              <Zap size={24} />
            </div>
            <h3>Fast turnaround</h3>
            <p>We work around your deadlines — not ours. Most quotes are back within 2 hours.</p>
          </motion.div>

          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="why-us-card"
          >
            <div className="why-us-icon">
              <CheckCircle size={24} />
            </div>
            <h3>Satisfaction guaranteed</h3>
            <p>Revisions are included with every engagement until you're fully satisfied with the output.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
