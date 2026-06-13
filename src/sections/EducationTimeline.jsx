import { motion } from 'framer-motion'
import { timeline } from '../data/siteData'

function EducationTimeline() {
  return (
    <section className="section timeline-section" id="education">
      <div className="section-heading center">
        <span>Education Timeline</span>
        <h2>Academic growth and internship experience</h2>
      </div>
      <div className="vertical-timeline">
        {timeline.map((item, index) => (
          <motion.article
            className="timeline-card glass-card"
            key={`${item.period}-${item.title}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -38 : 38 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
          >
            <span className="timeline-dot" />
            <small>{item.period}</small>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
            <strong>{item.result}</strong>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default EducationTimeline
