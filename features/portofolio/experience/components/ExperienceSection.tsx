import React from 'react'
import { EducationContent } from './EducationContent'
import { WorkContent } from './WorkContent'

export const ExperienceSection = () => {
  return (
    <section className="flex flex-col md:flex-row gap-12 bg-slate-50 py-12 px-6 sm:px-8 md:px-16 lg:px-24">
      <EducationContent />
      <WorkContent />
    </section>
  )
}
