import React from 'react'
import { SectionCard } from './SectionCard'

interface Props {
  data: any[]
  onRight?: boolean
}

export const RunningBanner = ({ data, onRight }: Props) => {
  return (
    <div className="overflow-hidden w-full relative">
      <div
        className="absolute left-0 w-20 h-44 z-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, white 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
        }}
      />
      <div
        className="absolute right-0 w-20 h-44 z-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(to left, white 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
        }}
      />
      <div
        className={`flex w-max gap-8 items-center ${onRight ? 'animate-marquee' : 'animate-marquee-reverse'}`}
      >
        {data.concat(data).map((val, idx) => (
          <SectionCard
            key={idx}
            src={val.icon}
            height={60}
            title={val.text}
            width={60}
          />
        ))}
      </div>
    </div>
  )
}
