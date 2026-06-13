import { motion } from 'framer-motion'
import { achievements } from '../data/siteData'

function AchievementsSection() {
  return (
    <section className="section achievements-section" id="achievements">
      <div className="section-heading center">
        <span>Achievements</span>
        <h2>Signals of consistency and growth</h2>
      </div>
      <div className="achievement-grid">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon
          return (
            <motion.article
              className="achievement-card glass-card"
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Icon />
              <span>0{index + 1}</span>
              <h3>{achievement.title}</h3>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default AchievementsSection
