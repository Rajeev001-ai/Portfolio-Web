import { motion } from 'framer-motion'
import { useState } from 'react'
import { contactLinks, owner } from '../data/siteData'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio contact from ${formData.name || 'Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${owner.email}&su=${subject}&body=${body}`

    const emailWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer')

    if (!emailWindow) {
      window.location.href = `mailto:${owner.email}?subject=${subject}&body=${body}`
    }

    setStatus('Message sent successfully.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="section contact-section" id="contact">
      <motion.div
        className="contact-card glass-card"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <div>
          <span className="eyebrow">Contact Me</span>
          <h2>Ready to build reliable Java backend systems.</h2>
          <p>
            Reach out for Java Backend Developer roles, internships, project
            discussions, or collaboration.
          </p>
          <div className="contact-links">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  href={link.href}
                  key={link.label}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                >
                  <Icon />
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>
        <form className="contact-form" aria-label="Contact form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              onChange={handleChange}
              placeholder="Your name"
              required
              type="text"
              value={formData.name}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              type="email"
              value={formData.email}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Tell me about the opportunity..."
              required
              rows="5"
              value={formData.message}
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </motion.div>
    </section>
  )
}

export default ContactSection
