import { SubTitleSection } from '#/components/ui/SubTitleSection'
import { TitleSection } from '#/components/ui/TitleSection'
import React from 'react'
import { SectionCard } from './SectionCard'
import { listProjects } from '#/constants/projects'

export const SelectedProjectsSection = () => {
  const selectedProjects = listProjects.filter((val) =>
    ['aca-insurance', 'mbinet', 'dashboard-afc'].includes(val.slug),
  )
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 px-6 pt-6 sm:px-24 md:px-16 lg:px-24">
      <div className="flex w-full flex-col gap-6 sm:w-[532px]">
        <TitleSection text="Selected Projects" className="text-center" />
        <SubTitleSection text="Highlighted projects that demonstrate my design and development experience." />
      </div>
      <div className="w-full flex flex-col gap-8">
        {selectedProjects.map((val, idx) => (
          <SectionCard
            key={idx}
            desc={val.desc}
            role={val.role}
            src={val.src}
            title={val.title}
            tools={val.tools}
            isReverse={idx % 2 === 0}
          />
        ))}
      </div>
    </div>
  )
}
