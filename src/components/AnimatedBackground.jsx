import { motion } from 'framer-motion'

const stars = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  size: 2 + (index % 4),
  delay: (index % 7) * 0.28,
}))

function AnimatedBackground() {
  return (
    <div className="cosmic-stage" aria-hidden="true">
      <div className="grid-plane" />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="aurora aurora-three" />
      <motion.div
        className="scan-ring"
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
      />
      {stars.map((star) => (
        <motion.span
          className="particle"
          key={star.id}
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.18, 0.8, 0.18], scale: [1, 1.45, 1] }}
          transition={{
            duration: 3.2,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground
