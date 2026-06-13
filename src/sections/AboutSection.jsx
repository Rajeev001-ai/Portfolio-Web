import { motion } from 'framer-motion'
import profileImage from '../assets/Rajeev Pic.jpeg'
import { infoCards, owner } from '../data/siteData'

function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -42 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-frame">
          <img src={profileImage} alt="Rajeev Patel profile placeholder" />
        </div>
      </motion.div>
      <motion.div
        className="about-copy"
        initial={{ opacity: 0, x: 42 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="section-heading">
          <span>About Me</span>
          <h2>Java developer fresher focused on clean backend engineering</h2>
        </div>
        <p>{owner.about}</p>
        <div className="info-grid">
          {infoCards.map((card) => (
            <article className="glass-card info-card" key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection
