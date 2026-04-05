'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

import { SubTitleSection } from '#/components/ui/SubTitleSection'
import { TitleSection } from '#/components/ui/TitleSection'
import { SectionCard } from './SectionCard'
import { listProjects } from '#/constants/projects'

const CARD_WIDTH = 420
const GAP = 32

export const OtherProjectSection = () => {
  const otherProjects = listProjects.filter(
    (val) => !['aca-insurance', 'mbinet', 'dashboard-afc'].includes(val.project.slug),
  )

  const containerRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const totalDistance = (otherProjects.length - 1) * (CARD_WIDTH + GAP)

  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])

  return (
    <section className="w-full">
      {/* Title */}
      <div className="flex w-full justify-center px-6 pt-6 sm:px-24 md:px-16 lg:px-24">
        <div className="-mb-12 flex w-[642px] flex-col items-center gap-6 text-center">
          <TitleSection text="Other Projects" />
          <SubTitleSection text="Other works and explorations across digital and interface design." />
        </div>
      </div>

      {/* Scroll container */}
      <div ref={containerRef} className="relative h-[300vh]">
        {/* Sticky wrapper */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          {/* Horizontal gallery */}
          <motion.div style={{ x }} className="flex gap-8 px-6 sm:px-24 md:px-16 lg:px-24">
            {otherProjects.map((val, idx) => (
              <div key={idx} className="w-[470px] flex-shrink-0">
                <SectionCard src={val.project.src} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
