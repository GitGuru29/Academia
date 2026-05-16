import { Code, Leaf, BarChart3, FileText, Zap, Palette, ArrowRight, Smartphone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/services.css';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  domain: string;
  pricing: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    id: 'fyp',
    icon: <Code size={24} />,
    title: 'FYP Technical Consulting',
    description: 'From system architecture to final documentation — we provide structured technical guidance and hands-on implementation support for your Final Year Project.',
    domain: 'IT / Both',
    pricing: 'from LKR 15,000',
    featured: true,
  },
  {
    id: 'agri',
    icon: <Leaf size={24} />,
    title: 'Agriculture Systems Support',
    description: 'Herbarium albums, Weed albums, Crop record books, GIS mapping, IoT dashboards, and smart farming systems — full support for agriculture-based projects.',
    domain: 'Agriculture',
    pricing: 'from LKR 8,000',
  },
  {
    id: 'data',
    icon: <BarChart3 size={24} />,
    title: 'Data Analysis & Reporting',
    description: 'Python, R, and SPSS-based analysis with charts, statistical interpretation, and presentation-ready outputs.',
    domain: 'IT',
    pricing: 'from LKR 5,000',
  },
  {
    id: 'report',
    icon: <FileText size={24} />,
    title: 'Technical Documentation',
    description: 'SRS documents, system manuals, research reports, and project documentation structured to university standards.',
    domain: 'Both',
    pricing: 'from LKR 4,000',
  },
  {
    id: 'assignment',
    icon: <Zap size={24} />,
    title: 'Assignment & Lab Support',
    description: 'Fast, clean solutions for coding assignments, database labs, algorithm problems, and network configurations.',
    domain: 'IT',
    pricing: 'from LKR 2,000',
  },
  {
    id: 'uiux',
    icon: <Palette size={24} />,
    title: 'Design & Presentation Support',
    description: 'Figma prototypes, system UI design, project presentations, and pitch decks that make your work stand out.',
    domain: 'IT',
    pricing: 'from LKR 3,000',
  },
  {
    id: 'mobile',
    icon: <Smartphone size={24} />,
    title: 'Mobile App Development',
    description: 'Kotlin and Flutter development for high-performance, native and cross-platform mobile applications.',
    domain: 'IT',
    pricing: 'from LKR 10,000',
  },
  {
    id: 'web',
    icon: <Globe size={24} />,
    title: 'Web Development',
    description: 'Full-stack web application development using modern frameworks, REST APIs, and databases.',
    domain: 'IT',
    pricing: 'from LKR 8,000',
  },
];

interface ServicesProps {
  onSubmitClick?: () => void;
}

export default function Services({ onSubmitClick }: ServicesProps) {
  return (
    <section className="services" id="services">
      <div className="services-container">
        {/* Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="services-header"
        >
          <span className="section-label">WHAT WE SUPPORT</span>
          <h2>End-to-end technical support across every stage</h2>
        </motion.div>

        {/* Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              key={service.id}
              className={`service-card ${service.featured ? 'featured' : ''}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-footer">
                <span className="service-domain">{service.domain}</span>
                <span className="service-pricing">{service.pricing}</span>
              </div>

              <button className="service-cta" onClick={onSubmitClick}>
                Quick order <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
