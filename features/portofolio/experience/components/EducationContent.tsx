import React from 'react'
import { CardContent } from './CardContent'
import { educationList } from '#/constants/education'
import { TitleSection } from '#/components/ui/TitleSection'

export const EducationContent = () => {
  return (
    <div className="flex flex-col gap-10">
      <TitleSection text="Education" />
      <div className="flex flex-col gap-8">
        {educationList.map((val, idx) => (
          <CardContent key={idx} {...val} />
        ))}
      </div>
    </div>
  )
}
