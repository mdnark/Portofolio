'use client'

import Image from 'next/image'
import React from 'react'
import { FooterColumn } from './FooterColumn'
import { listMenu } from '#/constants/menu'
import { Button } from 'antd'
import { handleScrollTo } from '#/utils/scroll'
import { contentServices } from '#/constants/services'
import { listContact } from '#/constants/footer'
import { currentYear } from '#/utils/currentYear'

export const FooterSection = () => {
  return (
    <div className="flex flex-col gap-12" id="contact">
      <div className="flex flex-col gap-8 px-12">
        <div className="border-b border-slate-200 pb-8">
          <h1 className="mb-0 text-4xl font-semibold text-slate-800">
            Let’s <span className="text-primary">Connect</span> there
          </h1>
        </div>
        <div className="flex flex-col gap-11 md:flex-row">
          <div className="flex w-full flex-col gap-6 lg:w-[700px]">
            <div className="flex items-center gap-2">
              <div
                className={`relative flex h-12 w-12 items-center gap-3 text-base font-semibold`}
              >
                <Image
                  src={'/logos.png'}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mb-0 text-xl font-semibold text-slate-800">
                M Danar Kahfi
              </p>
            </div>
            <p className="mb-0 whitespace-pre-line text-xs font-medium text-slate-500">
              {`I believe great digital products are born from great collaboration. If you're looking for someone who can bridge the gap between design and development, I'd love to hear from you.\n\nThank you for viewing my portfolio.`}
            </p>
          </div>
          <div className="flex w-full flex-col gap-11 sm:flex-row sm:justify-between">
            <FooterColumn title="Quick Links">
              {listMenu.map((val, idx) => (
                <Button
                  onClick={() => handleScrollTo(val.id)}
                  key={idx}
                  className={`h-fit border-none p-0 text-sm font-medium text-slate-500 shadow-none hover:!text-slate-300`}
                >
                  {val.name}
                </Button>
              ))}
            </FooterColumn>
            <FooterColumn title="Services">
              {contentServices.map((val, idx) => (
                <div key={idx} className="mb-0">
                  {val.title}
                </div>
              ))}
            </FooterColumn>
            <FooterColumn title="Contact">
              <a
                href={`mailto:${listContact.contact.email}`}
                target="_blank"
                rel="noreferrer"
              >
                {listContact.contact.email}
              </a>
              <a
                href={`tel:${listContact.contact.phone}`}
                target="_blank"
                rel="noreferrer"
              >
                {listContact.contact.phone}
              </a>
              <div className="flex gap-3">
                {listContact.socials.map((val, idx) => (
                  <a
                    key={idx}
                    href={val.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-fit w-fit items-center justify-center rounded-full bg-slate-100 p-3 text-xl"
                  >
                    <Image src={val.src} alt="" width={20} height={20} />
                  </a>
                ))}
              </div>
            </FooterColumn>
          </div>
        </div>
      </div>
      <div className="flex h-fit items-center justify-around bg-primary py-4 text-sm font-medium text-white">
        <p className="mb-0">
          {`Copyright © ${currentYear} M. Danar Kahfi. All rights reserved.`}
        </p>
      </div>
    </div>
  )
}
