import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import Section from './Section'
import { projects } from '../data/portfolio'

function ProjectCard({ project, index }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-100, 100], [9, -9]), {
    stiffness: 220,
    damping: 22,
  })
  const rotateY = useSpring(useTransform(x, [-100, 100], [-9, 9]), {
    stiffness: 220,
    damping: 22,
  })

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - rect.left - rect.width / 2)
    y.set(event.clientY - rect.top - rect.height / 2)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.article
      className="project-card glass-panel"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
    >
      <span className="project-index">0{index + 1}</span>
      <div className="project-topline">
        <span>{project.type}</span>
        <FaArrowRight />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="chip-row">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <strong>{project.impact}</strong>
    </motion.article>
  )
}

function Projects() {
  return (
    <Section id="projects" eyebrow="03 / Projects" title="Recruiter-focused builds">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
