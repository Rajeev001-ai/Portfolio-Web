import { motion } from 'framer-motion'
import { galaxySkills, owner } from '../data/siteData'

function TechStackGalaxy() {
  return (
    <section className="section galaxy-section" id="stack">
      <div className="section-heading center">
        <span>Tech Stack Galaxy</span>
        <h2>Skills orbiting around backend engineering</h2>
      </div>
      <motion.div
        className="skill-galaxy glass-card"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <motion.div
          className="galaxy-orbit orbit-a"
          animate={{ rotate: 360 }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="galaxy-orbit orbit-b"
          animate={{ rotate: -360 }}
          transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
        />
        <div className="galaxy-core">
          <strong>{owner.name}</strong>
          <span>{owner.role}</span>
        </div>
        {galaxySkills.map((skill, index) => {
          const Icon = skill.icon
          const angle = `${(360 / galaxySkills.length) * index}deg`
          const reverseAngle = `${(360 / galaxySkills.length) * index * -1}deg`

          return (
            <div
              className="galaxy-skill"
              key={skill.label}
              style={{ '--angle': angle, '--reverse-angle': reverseAngle }}
            >
              <motion.div
                className="galaxy-skill-card"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3 + (index % 4) * 0.35,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Icon />
                <span>{skill.label}</span>
              </motion.div>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default TechStackGalaxy
