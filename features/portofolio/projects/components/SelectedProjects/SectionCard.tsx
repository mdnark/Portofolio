'use client'

import { CustomButton } from '#/components/ui/CustomButton'
import { LabelPosition } from '#/components/ui/LabelPosition'
import Image from 'next/image'
import React from 'react'

interface Props {
  src: string
  title: string
  desc: string
  role: string[]
  tools: string[]
  isReverse: boolean
  slug?: string
}

export const SectionCard = ({
  role,
  tools,
  src,
  desc,
  title,
  slug,
  isReverse,
}: Props) => {
  return (
    <div
      className={`flex shadow-[17px_17px_44px_0px_rgba(0,104,255,0.05),_-8px_-8px_44px_0px_rgba(0,104,255,0.05)] ${isReverse ? 'flex-col-reverse xl:flex-row' : 'flex-col-reverse xl:flex-row-reverse'} items-center gap-6 rounded-3xl bg-slate-50`}
    >
      <div className="flex flex-col gap-6 px-8 py-5">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col-reverse gap-4 xl:flex-row">
            <h1 className="mb-0 text-3xl font-semibold text-slate-800">
              {title}
            </h1>
            <div className="flex gap-4">
              {role.map((val, idx) => (
                <LabelPosition key={idx} text={val} />
              ))}
            </div>
          </div>
          <div className="mb-0 flex items-center text-base font-medium text-slate-500">
            <span className="mr-1">Tools :</span>
            {tools.map((val, idx) => (
              <div key={idx} className="flex items-center">
                <span>{val}</span>
                {idx < tools.length - 1 && <p className="mx-1">&</p>}
              </div>
            ))}
          </div>
        </div>
        <p className="mb-0 whitespace-pre-line text-lg font-medium text-slate-700">
          {desc}
        </p>
        <CustomButton text="See Detail" isPrimary />
      </div>
      <div className="relative aspect-square w-full shrink-0 lg:aspect-[4/3] xl:h-[443px] xl:w-[490px]">
        <Image
          src={src}
          alt=""
          fill
          className="rounded-3xl object-fill lg:object-cover xl:object-contain"
        />
      </div>
    </div>
  )
}
