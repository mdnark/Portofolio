import React from 'react'
import { CardContent } from './CardContent'
import { workExperienceList } from '#/constants/workExperience'
import { TitleSection } from '#/components/ui/TitleSection'

export const WorkContent = () => {
  return (
    <div className="flex flex-col gap-10">
      <TitleSection text="Work Experience" />
      <div className="flex flex-col gap-8">
        {workExperienceList.map((val, idx) => (
          <CardContent key={idx} {...val} />
        ))}
      </div>
    </div>
  )
}
