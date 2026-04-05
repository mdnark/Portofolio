'use client'

import { SubTitleSection } from '#/components/ui/SubTitleSection'
import { TitleSection } from '#/components/ui/TitleSection'
import React, { useState } from 'react'
import { SectionCard } from './SectionCard'
import { listProjects } from '#/constants/projects'
import { DetailDrawer } from '../DetailDrawer'
import { ProjectDetail } from '../../type'

export const SelectedProjectsSection = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [data, setData] = useState<ProjectDetail | null>(null)

  const selectedProjects = listProjects.filter((val) =>
    ['aca-insurance', 'mbinet', 'dashboard-afc'].includes(val.project?.slug),
  )

  const dataProject = listProjects.filter(
    (val) => val.project.slug === data?.project.slug,
  )

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 px-6 pt-6 sm:px-24 md:px-16 lg:px-24">
      <div className="flex w-full flex-col gap-6 sm:w-[532px]">
        <TitleSection text="Selected Projects" className="text-center" />
        <SubTitleSection text="Highlighted projects that demonstrate my design and development experience." />
      </div>
      <div className="flex w-full flex-col gap-8">
        {selectedProjects.map((val, idx) => (
          <SectionCard
            key={idx}
            desc={val.overview.description}
            role={val.project.role}
            src={val.project.src}
            title={val.project.name}
            tools={val.project.techStack}
            isReverse={idx % 2 === 0}
            onClick={() => {
              setData(val)
              setOpen(!open)
            }}
          />
        ))}
      </div>
      <DetailDrawer open={open} setOpen={setOpen} datas={data}/>
    </div>
  )
}
