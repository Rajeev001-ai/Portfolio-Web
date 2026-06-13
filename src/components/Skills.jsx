import { motion } from 'framer-motion'
import Section from './Section'
import { skills } from '../data/portfolio'

function Skills() {
  return (
    <Section id="skills" eyebrow="02 / Skills" title="A backend-first technical stack">
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.article
              className="glass-panel skill-card"
              key={skill.group}
              whileHover={{ y: -8, rotate: index % 2 ? -1 : 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div className="skill-icon">
                <Icon />
              </div>
              <h3>{skill.group}</h3>
              <div className="chip-row">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}

export default Skills
