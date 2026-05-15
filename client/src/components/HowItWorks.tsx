import { useEffect, useRef, useState } from 'react';
import { Send, MessageSquare, Zap, CheckCircle } from 'lucide-react';
import '../styles/how-it-works.css';

interface Step {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  timeframe: string;
}

const steps: Step[] = [
  {
    number: 1,
    icon: <Send size={24} />,
    title: 'Share your brief',
    description: 'Submit your project requirements, deadline, and any university guidelines.',
    timeframe: 'Takes 2 minutes',
  },
  {
    number: 2,
    icon: <MessageSquare size={24} />,
    title: 'Get your plan',
    description: 'We review your brief and send a detailed quote and delivery plan.',
    timeframe: 'Within 2 hours',
  },
  {
    number: 3,
    icon: <Zap size={24} />,
    title: 'We work together',
    description: 'Our technical team handles implementation while keeping you informed at every stage.',
    timeframe: 'Varies',
  },
  {
    number: 4,
    icon: <CheckCircle size={24} />,
    title: 'Receive and review',
    description: "Get your completed deliverables. Revisions are included until you're satisfied.",
    timeframe: 'Before deadline',
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate the connector line
          const timer = setTimeout(() => {
            setLineWidth(100);
          }, 100);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works-container">
        {/* Header */}
        <div className="how-it-works-header">
          <span className="section-label">THE PROCESS</span>
          <h2>Simple, fast, confidential</h2>
        </div>

        {/* Timeline */}
        <div className="timeline" ref={containerRef}>
          <div className="timeline-connector" style={{ width: `${lineWidth}%` }}></div>

          <div className="timeline-steps">
            {steps.map((step, index) => (
              <div key={step.number} className="timeline-step">
                <div className="step-content">
                  <div className="step-icon-wrapper">
                    <div className="step-icon">{step.icon}</div>
                    <div className="step-number">{step.number}</div>
                  </div>

                  <div className="step-info">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                    <span className="step-timeframe">{step.timeframe}</span>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="step-connector-mobile"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
