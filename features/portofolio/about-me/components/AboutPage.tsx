import { TitleSection } from '#/components/ui/TitleSection'
import Image from 'next/image'
import React from 'react'

export const AboutPage = () => {
  return (
    <div
      className="relative flex items-center gap-14 bg-slate-50 pl-24 pr-36 mt-11"
      id="about_me"
    >
      <div className="relative h-[492px] w-[963px]">
        <Image
          src={'/assets/about-photo.png'}
          alt=""
          width={320}
          height={400}
          className="absolute bottom-0 left-16 z-20"
        />
        <Image
          src={'/assets/blob.svg'}
          alt=""
          width={463}
          height={600}
          className="absolute bottom-0 z-0"
        />
        <div
          className="absolute bottom-0 right-3 w-full h-16 z-20 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, #F8FAFC 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
          }}
        />
      </div>
      <div className="flex w-full flex-col gap-6">
        <div className="flex flex-col gap-4">
          <TitleSection text="About me" />
          <p className="mb-0 text-base text-slate-600">
            Let me introduce myself
          </p>
        </div>
        <div className="flex flex-col gap-2 text-base text-slate-900">
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
