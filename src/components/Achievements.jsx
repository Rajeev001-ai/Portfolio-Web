import { motion } from 'framer-motion'
import Section from './Section'
import { achievements } from '../data/portfolio'

function Achievements() {
  return (
    <Section id="achievements" eyebrow="05 / Achievements" title="Signals that matter">
      <div className="achievements-grid">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon
          return (
            <motion.article
              className="glass-panel achievement-card"
              key={achievement.title}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 240, damping: 18 }}
            >
              <span>0{index + 1}</span>
              <Icon />
              <h3>{achievement.title}</h3>
              <p>{achievement.text}</p>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}

export default Achievements
