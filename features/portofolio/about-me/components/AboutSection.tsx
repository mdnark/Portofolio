import React from 'react'
import { SideLeftContent } from './SideLeftContent'
import { SideRightContent } from './SideRightContent'

export const AboutSection = () => {
  return (
    <section
      className="scroll-mt-20 relative mt-11 flex items-center gap-32 bg-slate-50 px-6 sm:pl-24 sm:pr-28 xl:pr-36"
      id="about_me"
    >
      <SideLeftContent />
      <SideRightContent />
    </section>
  )
}
