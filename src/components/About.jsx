import Section from './Section'
import { education, profile } from '../data/portfolio'

function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="Backend clarity with product sense">
      <div className="about-grid">
        <div className="glass-panel about-card">
          <p>{profile.about}</p>
        </div>
        <div className="signal-stack">
          <div>
            <span>Education</span>
            <strong>{profile.education}</strong>
          </div>
          <div>
            <span>Location</span>
            <strong>{profile.location}</strong>
          </div>
          <div>
            <span>Experience</span>
            <strong>{profile.experience}</strong>
          </div>
        </div>
      </div>
      <div className="education-grid">
        {education.map((item) => (
          <article className="glass-panel education-card" key={item.degree}>
            <span>{item.period}</span>
            <h3>{item.degree}</h3>
            <p>{item.institute}</p>
            <strong>{item.score}</strong>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default About
