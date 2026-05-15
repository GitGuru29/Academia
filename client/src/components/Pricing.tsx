import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/pricing.css';

interface PricingTier {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: 'Quick Support',
    description: 'Single assignments, lab reports, short tasks. Fast turnaround.',
    price: 'LKR 500',
    period: 'starting from',
    features: [
      'Up to 5 pages',
      '24-48 hour turnaround',
      'Basic revisions',
      'Email support',
      'Standard quality',
    ],
  },
  {
    name: 'Project Support',
    description: 'Mid-scope projects, data analysis, documentation, UI work.',
    price: 'LKR 2,500',
    period: 'starting from',
    features: [
      'Up to 50 pages',
      '5-7 day turnaround',
      'Unlimited revisions',
      'Priority support',
      'Advanced quality',
      'File uploads included',
    ],
    featured: true,
  },
  {
    name: 'FYP Consulting',
    description: 'Full FYP technical consulting and implementation. Scoped per project.',
    price: 'LKR 15,000',
    period: 'starting from',
    features: [
      'Full project scope',
      'Custom timeline',
      'Unlimited revisions',
      'Dedicated support',
      'Premium quality',
      'Documentation included',
    ],
  },
];

interface PricingProps {
  onSubmitClick?: () => void;
}

export default function Pricing({ onSubmitClick }: PricingProps) {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        {/* Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pricing-header"
        >
          <span className="section-label">INVESTMENT</span>
          <h2>Transparent pricing, no surprises</h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {tiers.map((tier, index) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
              key={tier.name}
              className={`pricing-card ${tier.featured ? 'featured' : ''}`}
            >
              {tier.featured && (
                <div className="pricing-badge">Most popular</div>
              )}

              <h3 className="pricing-name">{tier.name}</h3>
              <p className="pricing-description">{tier.description}</p>

              <div className="pricing-amount">
                <span className="pricing-currency">LKR</span>
                <span className="pricing-value">
                  {tier.price.replace('LKR ', '')}
                </span>
                <span className="pricing-period">{tier.period}</span>
              </div>

              <button className="pricing-cta" onClick={onSubmitClick}>
                Get started
              </button>

              <div className="pricing-divider"></div>

              <ul className="pricing-features">
                {tier.features.map((feature) => (
                  <li key={feature} className="pricing-feature">
                    <Check size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Custom CTA */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="pricing-custom"
        >
          <p>Every engagement is scoped individually — submit your brief and we'll give you an exact quote.</p>
          <button className="custom-link" onClick={onSubmitClick}>
            Need a custom quote? → Tell us about your project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
