import React from 'react'
import { HeroSection } from './hero-section/components/HeroSection'
import { AboutSection } from './about-me/components/AboutSection'
import { ServicesSection } from './services/components/ServicesSection'
import { ToolsUsedSection } from './tools-used/components/ToolsUsedSection'
import { ProjectsSection } from './projects/components/ProjectsSection'
import { ExperienceSection } from './experience/components/ExperienceSection'
import { FooterSection } from './footer/components/FooterSection'

export const PortofolioPage = () => {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-16">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ToolsUsedSection />
      <ProjectsSection />
      <ExperienceSection />
      <FooterSection/>
    </main>
  )
}
