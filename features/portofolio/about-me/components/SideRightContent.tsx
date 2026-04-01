import { CustomButton } from '#/components/ui/CustomButton'
import { TitleSection } from '#/components/ui/TitleSection'
import React from 'react'
import { HiDownload } from 'react-icons/hi'

export const SideRightContent = () => {
  return (
    <div className="flex w-full flex-col gap-6 py-6">
      <div className="flex flex-col gap-4">
        <TitleSection text="About me" />
        <p className="mb-0 text-base text-slate-600">Let me introduce myself</p>
      </div>
      <div className="flex flex-col gap-2 text-base text-slate-900">
        <p className="mb-0 whitespace-pre-line">
          {`Hello! Im Danar, a Front-End Developer & UI/UX Designer who enjoys turning ideas into meaningful digital experiences. I love designing clean, intuitive interfaces and bringing them to life through code. I work with technologies like React, Next.js, TypeScript, and Tailwind CSS to build responsive and scalable web applications. I focus on creating products that are not only visually appealing but also functional, user-friendly, and accessible.\n\nWith a background in both design and development, Im comfortable collaborating with teams and translating business needs into practical solutions. Im always eager to learn, improve my skills, and contribute to impactful digitalproducts.`}
        </p>
      </div>
      <div className="flex gap-4">
        <CustomButton text="View Project" isPrimary />
        <a href="/assets/cv.pdf" download={'CV_M_Danar_Kahfi.pdf'}>
          <CustomButton
            text="Download CV"
            icon={<HiDownload className="text-base" />}
          />
        </a>
      </div>
    </div>
  )
}
