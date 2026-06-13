import { useEffect, useState } from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import AboutSection from './sections/AboutSection'
import AchievementsSection from './sections/AchievementsSection'
import ContactSection from './sections/ContactSection'
import EducationTimeline from './sections/EducationTimeline'
import HeroSection from './sections/HeroSection'
import InternshipSection from './sections/InternshipSection'
import ProjectsSection from './sections/ProjectsSection'
import QuickStats from './sections/QuickStats'
import ResumeSection from './sections/ResumeSection'
import TechStackGalaxy from './sections/TechStackGalaxy'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 1200)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <ScrollProgress />
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      <main>
        <HeroSection />
        <QuickStats />
        <AboutSection />
        <EducationTimeline />
        <TechStackGalaxy />
        <ProjectsSection />
        <InternshipSection />
        <ResumeSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
