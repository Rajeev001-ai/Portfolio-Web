import { motion } from 'framer-motion'
import { FaJava } from 'react-icons/fa'
import { profile, stats, techOrbit } from '../data/portfolio'

function Hero() {
  return (
    <section className="hero-section section" id="hero">
      <div className="hero-copy">
        <motion.span
          className="status-pill"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Available for Java backend roles
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          {profile.name}
          <span>{profile.role}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.7 }}
        >
          {profile.summary}
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.65 }}
        >
          <a className="primary-button" href="#projects">
            View Projects
          </a>
          <a className="ghost-button" href="#contact">
            Contact Me
          </a>
        </motion.div>
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.86, rotateX: 16 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
      >
        <div className="identity-core">
          <motion.div
            className="core-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
          <div className="avatar-orb">
            <FaJava />
            <span>Java</span>
          </div>
          {techOrbit.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                className="orbit-icon"
                key={tech.label}
                style={{ '--i': index }}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3 + index * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Icon />
                <small>{tech.label}</small>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
