import React from 'react'
import { PiStarFourFill } from 'react-icons/pi'

interface Props {
  data: any[]
}

export const RunningBanner = ({ data }: Props) => {
  return (
    <div className="absolute -bottom-20 z-30 w-full skew-y-2 overflow-hidden bg-slate-50 p-6">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {[...Array(2)].map((_, repeatidx) => (
          <div key={repeatidx} className="flex shrink-0 items-center">
            {data.map((val, idx) => (
              <div key={idx} className="flex items-center">
                <p className="mb-0 text-4xl font-bold text-primary">
                  {val.title}
                </p>
                <span className="mx-7 text-xl text-primary">
                  <PiStarFourFill />
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
