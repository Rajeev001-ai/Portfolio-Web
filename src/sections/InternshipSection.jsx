import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import { internship } from '../data/siteData'

function InternshipSection() {
  return (
    <section className="section internship-section" id="internship">
      <div className="section-heading">
        <span>Internship Experience</span>
        <h2>Hands-on backend work in a professional environment</h2>
      </div>
      <motion.article
        className="internship-card glass-card"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <div className="internship-icon">
          <FaBriefcase />
        </div>
        <div className="internship-meta">
          <span>{internship.duration}</span>
          <h3>{internship.role}</h3>
          <p>{internship.company}</p>
        </div>
        <ul>
          {internship.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.article>
    </section>
  )
}

export default InternshipSection
