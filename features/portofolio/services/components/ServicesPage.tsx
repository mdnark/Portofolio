import { SubTitleSection } from '#/components/ui/SubTitleSection'
import { TitleSection } from '#/components/ui/TitleSection'
import { contentServices } from '#/constants/services'
import React from 'react'
import { SectionCard } from './SectionCard'

export const ServicesPage = () => {
  return (
    <div
      className="flex flex-col gap-6 px-32 justify-center items-center pt-6"
      id="services"
    >
      <div className="flex flex-col gap-6 w-[532px]">
        <TitleSection text="Services" className="text-center" />
        <SubTitleSection text="Combining user-centered design with modern front-end development to build impactful web solutions." />
      </div>
      <div className="w-full flex justify-between">
        {contentServices.map((val, idx) => (
          <SectionCard
            key={idx}
            src={val.icon}
            height={val.height}
            width={val.width}
            subtitle={val.subtitle}
            title={val.title}
          />
        ))}
      </div>
    </div>
  )
}
