import { motion } from 'framer-motion'
import profileImage from '../assets/Rajeev Pic.jpeg'
import resumeFile from '../assets/Rajeev Resume.pdf'
import { floatingTech, heroButtons, owner } from '../data/siteData'

function HeroSection() {
  return (
    <section className="hero section" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 42 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <span className="eyebrow">Backend systems / Java ecosystem</span>
        <h1>
          Hi, I'm <strong>{owner.name}</strong>
        </h1>
        <h2>{owner.role}</h2>
        <p>{owner.intro}</p>
        <div className="hero-actions">
          {heroButtons.map((button) => {
            const Icon = button.icon
            const href = button.type === 'download' ? resumeFile : button.href
            return (
              <a
                className={`btn ${button.type === 'ghost' ? 'btn-ghost' : 'btn-primary'}`}
                download={button.type === 'download' ? 'Rajeev-Patel-Resume.pdf' : undefined}
                href={href}
                key={button.label}
              >
                {Icon && <Icon />}
                {button.label}
              </a>
            )
          })}
        </div>
      </motion.div>

      <motion.div
        className="hero-portrait"
        initial={{ opacity: 0, scale: 0.84, rotateY: -12 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ delay: 0.18, duration: 0.9, ease: 'easeOut' }}
      >
        <div className="portrait-shell">
          <div className="portrait-ring" />
          <img src={profileImage} alt="Rajeev Patel profile placeholder" />
          {floatingTech.map((tech, index) => {
            const Icon = tech.icon
            return (
              <div
                className="floating-tech"
                key={tech.label}
                style={{ '--i': index }}
              >
                <motion.div
                  className="floating-tech-card"
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration: 3.2 + index * 0.25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Icon />
                  <span>{tech.label}</span>
                </motion.div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
