'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

import { SubTitleSection } from '#/components/ui/SubTitleSection'
import { TitleSection } from '#/components/ui/TitleSection'
import { SectionCard } from './SectionCard'
import { listProjects } from '#/constants/projects'

const CARD_WIDTH = 420
const GAP = 32

export const WorkStudiesPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const totalDistance = (listProjects.length - 1) * (CARD_WIDTH + GAP)

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])

  return (
    <section className="w-full">
      {/* Title */}
      <div className="flex w-full justify-center">
        <div className="flex w-[642px] flex-col items-center gap-6 pb-12 text-center">
          <TitleSection text="Work & Case Studies" />
          <SubTitleSection text="A collection of web and mobile applications I’ve designed and developed, focused on usability, performance, and business impact." />
        </div>
      </div>

      {/* Scroll container */}
      <div ref={containerRef} className="relative h-[300vh]">
        {/* Sticky wrapper */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* Horizontal gallery */}
          <motion.div style={{ x }} className="flex gap-8 px-32">
            {listProjects.map((project, idx) => (
              <div key={idx} className="w-[470px] flex-shrink-0">
                <SectionCard {...project} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
