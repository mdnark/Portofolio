import Image from 'next/image'
import React from 'react'

export const SideLeftContent = () => {
  return (
    <div className="hidden lg:flex relative h-[492px] w-[600px]">
      {/* blob background */}
      <Image
        src={'/assets/blob.svg'}
        alt=""
        fill
        className="z-0 object-contain"
      />

      {/* foto */}
      <Image
        src={'/assets/about-photo.png'}
        alt=""
        fill
        className="z-20 object-contain object-bottom"
      />

      {/* gradient fade bottom */}
      <div
        className="pointer-events-none absolute -bottom-1 z-30 h-16 w-full"
        style={{
          background:
            'linear-gradient(to top, #F8FAFC 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
        }}
      />

      {/* Icons */}

      <div className="shadow-[4px_4px_24px_0px_rgba(0,0,0,0.05) absolute left-7 top-10 flex h-fit w-fit items-center justify-center rounded-full bg-white p-6">
        <Image
          src={'/assets/icon/reactjs.svg'}
          alt=""
          width={60}
          height={60}
          className="-rotate-[30deg]"
        />
      </div>
      <div className="shadow-[4px_4px_24px_0px_rgba(0,0,0,0.05) absolute -left-7 bottom-32 flex h-fit w-fit items-center justify-center rounded-full bg-white p-6">
        <Image
          src={'/assets/icon/figma.svg'}
          alt=""
          width={50}
          height={50}
          className="-rotate-[30deg]"
        />
      </div>
      <div className="shadow-[4px_4px_24px_0px_rgba(0,0,0,0.05) absolute right-5 top-36 flex h-fit w-fit items-center justify-center rounded-full bg-white p-6">
        <Image
          src={'/assets/icon/nextjs.svg'}
          alt=""
          width={50}
          height={50}
          className="-rotate-[30deg]"
        />
      </div>
      <div className="shadow-[4px_4px_24px_0px_rgba(0,0,0,0.05) absolute -right-16 bottom-10 flex h-fit w-fit items-center justify-center rounded-full bg-white p-6">
        <Image
          src={'/assets/icon/typescript.svg'}
          alt=""
          width={50}
          height={50}
          className="rotate-[30deg]"
        />
      </div>
    </div>
  )
}
