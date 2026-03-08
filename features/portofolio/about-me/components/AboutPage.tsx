import { TitleSection } from '#/components/ui/TitleSection'
import Image from 'next/image'
import React from 'react'

export const AboutPage = () => {
  return (
    <div
      className="relative flex gap-24 bg-slate-50 items-center px-36"
      id="about_me"
    >
      <div className="relative w-[963px] h-[492px]">
        <Image
          src={'/assets/about-photo.png'}
          alt=""
          width={320}
          height={400}
          className="absolute bottom-0 z-20"
        />
        <Image
          src={'/assets/circle-2.svg'}
          alt=""
          width={370}
          height={510}
          className="absolute top-20 -left-4 z-10"
        />
        <Image
          src={'/assets/circle-1.svg'}
          alt=""
          width={463}
          height={600}
          className="absolute top-0 -left-16 z-0"
        />
        <div
          className="absolute bottom-0 right-3 w-[350px] h-16 z-20 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, #EFF6FF 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
          }}
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <TitleSection text="About me" />
          <p className="text-slate-600 text-base mb-0">
            Let me introduce myself
          </p>
        </div>
        <div className="flex flex-col gap-2 text-slate-900 text-base">
          <p>
            Over the past two years, I have worked on various internal and
            client-based projects, contributing both as a UI/UX designer and
            front-end developer.
          </p>
          <p>
            I enjoy collaborating with cross-functional teams and turning
            complex business requirements into simple, intuitive user
            interfaces. My approach focuses on clarity, usability, and long-term
            maintainability.
          </p>
        </div>
      </div>
    </div>
  )
}
