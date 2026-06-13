import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28 })

  return <motion.div className="scroll-progress" style={{ scaleX }} />
}

export default ScrollProgress
