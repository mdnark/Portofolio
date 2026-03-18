'use client'

import { CustomButton } from '#/components/ui/CustomButton'
import Image from 'next/image'
import React from 'react'
import { HiDownload } from 'react-icons/hi'

export const HeroPage = () => {
  return (
    <div
      className="relative flex h-fit flex-col gap-24 overflow-hidden"
      id="home"
    >
      <Image
        src={'/assets/abstrac-line.svg'}
        alt=""
        width={1290}
        height={700}
        className="absolute -left-5 top-0"
      />

      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-16 pt-16 lg:gap-14 lg:px-36 xl:gap-28">
        <div className="flex w-full flex-col gap-4">
          <p className="mb-0 text-xl font-medium text-blue-900">
            Hi, I’m <span className="text-blue-600">M Danar Kahfi</span>
          </p>
          <div>
            <h1 className="mb-0 inline-block bg-primary-gradient bg-clip-text pb-3 text-3xl font-bold text-transparent lg:text-4xl">
              UI/UX Designer &
            </h1>
            <h1 className="mb-0 inline-block w-96 md:w-full bg-primary-gradient bg-clip-text pb-3 text-3xl font-bold text-transparent text-end lg:text-4xl">
              Front-End Developer
            </h1>
          </div>
          <p className="text-base text-slate-600">
            I specialize in crafting responsive web applications with clean
            design systems and scalable front-end architecture. Passionate about
            solving real user problems through thoughtful design and efficient
            code.
          </p>
          <div className="flex gap-4">
            <CustomButton text="View Project" isPrimary />
            <CustomButton
              text="Download CV"
              icon={<HiDownload className="text-base" />}
            />
          </div>
        </div>
        <div className="relative h-[462px] w-[563px] lg:w-[663px] xl:w-[963px]">
          <Image
            src={'/assets/blob.svg'}
            alt=""
            fill
            className="object-contain"
          />
          <Image
            src={'/assets/hero-photo.png'}
            alt=""
            fill
            className="object-contain"
          />
          <div
            className="pointer-events-none absolute -bottom-1 z-20 h-28 w-full"
            style={{
              background:
                'linear-gradient(to top, white 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
