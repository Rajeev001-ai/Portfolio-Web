import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { projects } from '../data/siteData'

function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <span>Featured Projects</span>
        <h2>Premium backend projects with secure real-world flows</h2>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card glass-card"
            key={project.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, rotateX: 5, rotateY: index % 2 ? -5 : 5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
          >
            <div className="project-image">
              <span>0{index + 1}</span>
              <strong>{project.title}</strong>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-badges">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className="project-actions">
              {project.githubLinks ? (
                project.githubLinks.map((link) => (
                  <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                    <FaGithub />
                    {link.label}
                  </a>
                ))
              ) : (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                  GitHub
                </a>
              )}
              <a href={project.demo}>
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
