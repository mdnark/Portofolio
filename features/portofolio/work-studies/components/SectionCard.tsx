import { SubTitleSection } from '#/components/ui/SubTitleSection'
import Image from 'next/image'
import React from 'react'
import { LabelPosition } from './LabelPosition'

interface Props {
  src: string
  title: string
  subtitle: string
  jobPosition: string[]
}

export const SectionCard = ({ jobPosition, src, subtitle, title }: Props) => {
  return (
    <div className="flex flex-col gap-8 rounded-3xl shadow-[17px_17px_44px_0px_rgba(0,104,255,0.05),_-8px_-8px_44px_0px_rgba(0,104,255,0.05)]">
      <Image
        src={src}
        alt=""
        width={490}
        height={443}
        className="object-contain"
      />
      <div className="flex flex-col gap-5 px-5 pb-7">
        <div>
          <h1 className=" text-slate-800 font-semibold text-xl mb-0 pb-2">
            {title}
          </h1>
          <SubTitleSection
            text={subtitle}
            className="!text-slate-600 text-start"
          />
        </div>
        <div className="flex gap-4">
          {jobPosition.map((val, idx) => (
            <LabelPosition key={idx} text={val} />
          ))}
        </div>
      </div>
    </div>
  )
}
