'use client'

import { CustomButton } from '#/components/ui/CustomButton'
import { LabelPosition } from '#/components/ui/LabelPosition'
import Image from 'next/image'
import React from 'react'

type Props = {
  src: string
  title: string
  desc: string
  role: string[]
  tools: string[]
  isReverse: boolean
  onClick: () => void
  slug?: string
}

export const SectionCard = ({
  role,
  tools,
  src,
  desc,
  title,
  onClick,
  isReverse,
}: Props) => {
  return (
    <div
      className={`relative flex w-full shadow-[17px_17px_44px_0px_rgba(0,104,255,0.05),_-8px_-8px_44px_0px_rgba(0,104,255,0.05)] ${isReverse ? 'flex-col-reverse lg:flex-row' : 'flex-col-reverse lg:flex-row-reverse'} items-center gap-6 rounded-3xl bg-slate-50`}
    >
      <div className="flex w-full flex-col gap-6 px-8 py-5 lg:w-1/2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col-reverse gap-4 ">
            <h1 className="mb-0 text-3xl font-semibold text-slate-800">
              {title}
            </h1>
            <div className="flex gap-4">
              {role.map((val, idx) => (
                <LabelPosition key={idx} text={val} />
              ))}
            </div>
          </div>
          <div className="mb-0 flex items-center overflow-hidden text-base font-medium text-slate-500">
            <span className="mr-1 shrink-0">Tools :</span>
            <p className="mb-0 truncate">{tools.join(' & ')}</p>
          </div>
        </div>
        <p className="mb-0 whitespace-pre-line text-lg font-medium text-slate-700">
          {desc}
        </p>
        <CustomButton text="See Detail" isPrimary onClick={onClick} />
      </div>
      <div className="relative aspect-square w-full shrink-0 lg:aspect-auto lg:w-1/2 lg:self-stretch">
        <Image src={src} alt="" fill className="rounded-3xl object-cover" />
      </div>
    </div>
  )
}
