import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/testimonials.css';

interface Testimonial {
  id: number;
  name: string;
  degree: string;
  university: string;
  quote: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Kavinda Perera',
    degree: 'BSc Software Engineering',
    university: 'SLIIT',
    quote: '"I was two weeks out from my FYP submission with a broken system and no idea how to fix the backend. The team diagnosed the issue within an hour and had everything running by the next morning. Genuinely saved my degree."',
    initials: 'KP',
  },
  {
    id: 2,
    name: 'Thisari Madurangi',
    degree: 'BSc Agriculture Technology',
    university: 'Wayamba University',
    quote: '"My smart irrigation system project was completely stuck — I had the hardware but no idea how to build the data dashboard. They delivered a clean, working web interface in three days. Exactly what I needed."',
    initials: 'TM',
  },
  {
    id: 3,
    name: 'Ravindu Fernando',
    degree: 'HND Information Technology',
    university: 'NIBM',
    quote: '"Submitted a database assignment brief on a Tuesday night, had the full solution with documentation by Wednesday morning. Fast, clean, no questions asked. Will use again."',
    initials: 'RF',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        {/* Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="testimonials-header"
        >
          <span className="section-label">TESTIMONIALS</span>
          <h2>Loved by students</h2>
        </motion.div>

        {/* Carousel */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.23, 1, 0.32, 1] }}
              key={testimonial.id} 
              className="testimonial-card"
            >
              {/* Stars */}
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="star-filled" />
                ))}
              </div>

              {/* Quote */}
              <p className="testimonial-quote">{testimonial.quote}</p>

              {/* Author */}
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.initials}
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-degree">
                    {testimonial.degree} — {testimonial.university}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
