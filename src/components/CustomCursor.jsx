import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 38 })
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 38 })

  useEffect(() => {
    let frameId = 0

    const handleMove = (event) => {
      if (frameId) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        mouseX.set(event.clientX - 10)
        mouseY.set(event.clientY - 10)
        document.documentElement.style.setProperty('--glow-x', `${event.clientX}px`)
        document.documentElement.style.setProperty('--glow-y', `${event.clientY}px`)
        frameId = 0
      })
    }

    window.addEventListener('pointermove', handleMove)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [mouseX, mouseY])

  return <motion.div className="custom-cursor" style={{ x: cursorX, y: cursorY }} />
}

export default CustomCursor
