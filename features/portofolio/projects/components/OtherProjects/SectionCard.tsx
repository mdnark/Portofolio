'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

interface Props {
  src: string
}

export const SectionCard = ({ src }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.8 }}
      className="relative flex aspect-square w-full shrink-0 gap-6 rounded-3xl shadow-[17px_17px_44px_0px_rgba(0,104,255,0.05),_-8px_-8px_44px_0px_rgba(0,104,255,0.05)] lg:aspect-[4/3] xl:h-[443px] xl:w-[490px]"
    >
      <Image
        src={src}
        alt=""
        fill
        className="rounded-3xl object-fill lg:object-cover xl:object-contain"
      />
    </motion.div>
  )
}
