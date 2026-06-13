import { motion } from 'framer-motion'
import Section from './Section'
import { experience } from '../data/portfolio'

function Experience() {
  return (
    <Section id="experience" eyebrow="04 / Experience" title="Growing through real implementation">
      <div className="timeline">
        {experience.map((item, index) => (
          <motion.article
            className="timeline-item glass-panel"
            key={item.title}
            initial={{ opacity: 0, x: index % 2 ? 34 : -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="timeline-dot" />
            <span>{item.period}</span>
            <h3>{item.title}</h3>
            <strong>{item.company}</strong>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

export default Experience
