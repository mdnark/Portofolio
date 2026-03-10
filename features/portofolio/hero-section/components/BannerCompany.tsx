import { listCompany } from '#/constants/companies'
import Image from 'next/image'
import React from 'react'

export const BannerCompany = () => {
  return (
    <div className="w-full overflow-hidden bg-slate-50">
      <div
        className="pointer-events-none absolute left-0 z-20 h-28 w-20"
        style={{
          background:
            'linear-gradient(to right, white 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute right-0 z-20 h-28 w-20"
        style={{
          background:
            'linear-gradient(to left, white 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
        }}
      />
      <div className="animate-marquee-hero flex w-max items-center gap-16 px-11 py-3">
        {listCompany.concat(listCompany).map((val, idx) => (
          <Image
            key={idx}
            src={val.path}
            alt=""
            width={val.width}
            height={val.height}
          />
        ))}
      </div>
    </div>
  )
}
