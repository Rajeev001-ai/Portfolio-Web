import { AnimatePresence, motion } from 'framer-motion'

function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: 'none' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="loader-core"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Booting Rajeev.dev
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
