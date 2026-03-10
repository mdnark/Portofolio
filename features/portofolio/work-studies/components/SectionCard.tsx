'use client'

import { SubTitleSection } from '#/components/ui/SubTitleSection'
import Image from 'next/image'
import React from 'react'
import { LabelPosition } from './LabelPosition'
import { motion } from 'motion/react'
import Link from 'next/link'

interface Props {
  src: string
  title: string
  subtitle: string
  role: string[]
  tools: string[]
  slug: string
}

export const SectionCard = ({
  role,
  tools,
  src,
  subtitle,
  title,
  slug,
}: Props) => {
  return (
    <Link href={`/projects/${slug}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.8 }}
        className="relative flex flex-col gap-6 rounded-3xl shadow-[17px_17px_44px_0px_rgba(0,104,255,0.05),_-8px_-8px_44px_0px_rgba(0,104,255,0.05)]"
      >
        <Image
          src={src}
          alt=""
          width={490}
          height={443}
          className="object-contain"
        />
        <div className="flex flex-col px-5 pb-7">
          <h1 className="text-xl font-semibold text-blue-900">{title}</h1>
          <SubTitleSection
            text={subtitle}
            className="text-start !font-medium !text-slate-600"
          />
          <div className="mt-3 flex gap-4">
            {tools.map((val, idx) => (
              <LabelPosition key={idx} text={val} />
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 flex rounded-bl-xl rounded-tr-xl bg-blue-900 px-4 py-2">
          <p className="text-sm font-medium text-white">{role.join(' • ')}</p>
        </div>
      </motion.div>
    </Link>
  )
}
