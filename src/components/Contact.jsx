import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Section from './Section'
import { profile, socials } from '../data/portfolio'

function Contact() {
  return (
    <Section id="contact" eyebrow="06 / Contact" title="Let us build the next backend system">
      <div className="contact-panel glass-panel">
        <div>
          <p>
            I am actively seeking Java Backend Developer opportunities where I
            can contribute to real-world products, REST APIs, databases, and
            production-grade application logic.
          </p>
          <div className="contact-lines">
            <a href={`mailto:${profile.email}`}>
              <FaEnvelope />
              {profile.email}
            </a>
            <span>
              <FaMapMarkerAlt />
              {profile.location}
            </span>
          </div>
        </div>
        <div className="contact-actions">
          <a className="primary-button" href={`mailto:${profile.email}`}>
            Send Email
          </a>
          <div className="social-row">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a href={social.href} key={social.label} target="_blank" rel="noreferrer">
                  <Icon />
                  {social.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
