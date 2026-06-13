import { motion } from 'framer-motion'
import { FaDownload, FaEye, FaFileAlt } from 'react-icons/fa'
import resumeFile from '../assets/Rajeev Resume.pdf'

function ResumeSection() {
  return (
    <section className="section resume-section" id="resume">
      <motion.div
        className="resume-card glass-card"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <div className="resume-preview">
          <FaFileAlt />
          <span>Rajeev Resume.pdf</span>
          <strong>Java Backend Developer</strong>
        </div>
        <div className="resume-copy">
          <span className="eyebrow">Resume</span>
          <h2>Recruiter-ready snapshot of skills, projects, and experience.</h2>
          <p>
            Preview the resume in a new tab or download it directly for offline
            review.
          </p>
          <div className="resume-actions">
            <a className="btn btn-ghost" href={resumeFile} target="_blank" rel="noreferrer">
              <FaEye />
              View Resume
            </a>
            <a className="btn btn-primary" href={resumeFile} download="Rajeev Resume.pdf">
              <FaDownload />
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ResumeSection
