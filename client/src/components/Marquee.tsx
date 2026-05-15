import '../styles/marquee.css';

const tags = [
  'Software Engineering',
  'Computer Science',
  'FYP Development',
  'Agriculture Technology',
  'Data Analysis',
  'Smart Farming',
  'GIS & Remote Sensing',
  'Network Security',
  'IoT Systems',
  'Database Design',
  'Mobile Development',
  'Research Papers',
];

export default function Marquee() {
  // Duplicate tags for seamless loop
  const duplicatedTags = [...tags, ...tags];

  return (
    <section className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-content">
          {duplicatedTags.map((tag, index) => (
            <div key={index} className="marquee-item">
              <span className="marquee-tag">{tag}</span>
              <span className="marquee-separator">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
