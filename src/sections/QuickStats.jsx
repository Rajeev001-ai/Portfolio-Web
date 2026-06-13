import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { quickStats } from '../data/siteData'

function Counter({ value, suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const count = useMotionValue(0)
  const spring = useSpring(count, { stiffness: 80, damping: 22 })
  const rounded = useTransform(spring, (latest) => latest.toFixed(decimals))

  useEffect(() => {
    if (inView) {
      count.set(value)
    }
  }, [count, inView, value])

  return (
    <span ref={ref}>
      <motion.strong>{rounded}</motion.strong>
      {suffix}
    </span>
  )
}

function QuickStats() {
  return (
    <section className="section stats-section" id="stats">
      <div className="section-heading compact">
        <span>Quick Stats</span>
        <h2>Proof points recruiters can scan fast</h2>
      </div>
      <div className="stats-grid">
        {quickStats.map((stat, index) => (
          <motion.article
            className="glass-card stat-card"
            key={stat.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
            <p>{stat.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default QuickStats
