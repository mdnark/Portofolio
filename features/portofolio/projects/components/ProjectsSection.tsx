import React from 'react'
import { SelectedProjectsSection } from './SelectedProjects/SelectedProjectsSection'
import { OtherProjectSection } from './OtherProjects/OtherProjectsSection'

export const ProjectsSection = () => {
  return (
    <section className="flex scroll-mt-24 flex-col gap-16" id="projects">
      <SelectedProjectsSection />
      <OtherProjectSection />
    </section>
  )
}
