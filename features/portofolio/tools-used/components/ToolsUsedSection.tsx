import { TitleSection } from '#/components/ui/TitleSection'
import { listTools } from '#/constants/tools'
import React from 'react'
import { RunningBanner } from './RunningBanner'

export const ToolsUsedSection = () => {
  const half = Math.ceil(listTools.length / 2)
  const banner1 = listTools.slice(0, half)
  const banner2 = listTools.slice(half)

  return (
    <section className="flex flex-col gap-9 items-center">
      <TitleSection text="Tools Used" />
      <RunningBanner data={banner1} onRight />
      <RunningBanner data={banner2} />
    </section>
  )
}
