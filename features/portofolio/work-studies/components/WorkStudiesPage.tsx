import { SubTitleSection } from '#/components/ui/SubTitleSection'
import { TitleSection } from '#/components/ui/TitleSection'
import React from 'react'
import { SectionCard } from './SectionCard'
import { listProjects } from '#/constants/projects'

export const WorkStudiesPage = () => {
  return (
    <div className="flex flex-col gap-12 px-32 items-center">
      <div className="flex flex-col gap-6 pb-8 items-center w-[592px]">
        <TitleSection text="Work & Case Studies" />
        <SubTitleSection text="A collection of web and mobile applications I’ve designed and developed, focused on usability, performance, and business impact." />
      </div>
      <div className="grid grid-cols-2 gap-6">
        {listProjects.map((val, idx) => (
          <SectionCard
            key={idx}
            src={val.src}
            jobPosition={val.jobPosition}
            subtitle={val.subtitle}
            title={val.title}
          />
        ))}
      </div>
    </div>
  )
}
