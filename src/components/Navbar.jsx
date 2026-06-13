import { motion } from 'framer-motion'
import { navItems } from '../data/siteData'

function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <a className="brand" href="#hero" aria-label="Rajeev Patel home">
        <span>R</span>
        Rajeev Patel
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={`#${item === 'Home' ? 'hero' : item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}

export default Navbar
