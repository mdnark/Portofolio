'use client'

import { useBreakpoint } from '#/hooks/useBreakpoint'
import Image from 'next/image'
import React from 'react'
import { RunningBanner } from './RunningBanner'
import { contentServices } from '#/constants/services'

export const HeroSection = () => {
  const { isMobile } = useBreakpoint()

  const textClass = isMobile ? '!mt-6' : 'mt-4 sm:mt-7 md:mt-5 lg:mt-6'
  const negMarginClass = isMobile ? '!-mt-12' : '-mt-16 sm:-mt-24 md:-mt-36'
  const sizeClass = isMobile
    ? '!text-[90px]'
    : 'text-[110px] sm:text-[158px] md:text-[200px]'
  const textShadow = '[text-shadow:7px_7px_24px_rgba(0,0,0,0.10)]'

  const words = ['PORTO', 'FOLIO']

  return (
    <div className="relative flex h-fit w-full justify-center" id="home">
      <Image
        src={'/assets/abstrac-line.svg'}
        alt=""
        width={1290}
        height={700}
        className="absolute top-0 skew-y-6"
      />

      <div className="relative h-[310px] w-[300px] sm:h-[442px] sm:w-[463px] md:h-[502px] md:w-[663px] xl:w-[963px]">
        <div
          className={`relative flex flex-col items-center justify-center ${sizeClass} font-extrabold text-primary sm:mt-0`}
        >
          {words.map((word, i) => (
            <h1
              key={word}
              className={`${i === 0 ? textClass : negMarginClass} mb-0 ${textShadow}`}
            >
              {word}
            </h1>
          ))}

          <div
            className={`absolute z-40 flex flex-col items-center justify-center ${sizeClass} font-extrabold text-transparent [-webkit-text-stroke:1px_theme(colors.primary)]`}
          >
            {words.map((word, i) => (
              <h1
                key={word}
                className={`${i === 0 ? textClass : negMarginClass} mb-0 ${textShadow}`}
              >
                {word}
              </h1>
            ))}
          </div>
        </div>
        <Image
          src={'/assets/hero-photo.png'}
          alt=""
          fill
          className="object-contain"
        />
        <div
          className="pointer-events-none absolute -bottom-1 z-20 h-20 w-full"
          style={{
            background:
              'linear-gradient(to top, white 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
          }}
        />
      </div>
      <RunningBanner data={contentServices} />
    </div>
  )
}
