'use client'

import { Button, Drawer, Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import { CustomButton } from '../ui/CustomButton'
import Image from 'next/image'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { listMenu, MenuItem } from '#/constants/menu'
import { handleScrollTo } from '#/utils/scroll'

const { Header } = Layout

export const HeaderPage = () => {
  const [activeSection, setActiveSection] = useState<MenuItem[]>(listMenu)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      setActiveSection((prev) =>
        prev.map((item) => {
          const el = document.getElementById(item.id)
          if (el) {
            const offsetTop = el.offsetTop
            const offsetHeight = el.offsetHeight

            if (
              scrollY >= offsetTop - 150 &&
              scrollY < offsetTop + offsetHeight - 150
            ) {
              return { ...item, isActive: true }
            }
          }
          return { ...item, isActive: false }
        }),
      )
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const title = (
    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
      <div className={`relative flex h-16 w-16`}>
        <Image src={'/logos.png'} alt="" fill className="object-contain" />
      </div>
      <Button
        onClick={() => setOpen(!open)}
        className="flex h-fit w-fit items-center justify-center rounded-full border-none bg-blue-50 p-2"
      >
        <HiX className="text-2xl text-primary" />
      </Button>
    </div>
  )

  return (
    <Header
      className={`fixed z-50 flex h-fit w-full items-center justify-between bg-white px-6 py-2 sm:px-8 md:px-16 lg:px-24`}
    >
      <div className={`relative flex h-16 w-16`}>
        <Image src={'/logos.png'} alt="" fill className="object-contain" />
      </div>
      <div className={`hidden items-center gap-7 md:flex lg:gap-12`}>
        {activeSection.map((val, idx) => (
          <Button
            onClick={() => handleScrollTo(val.id)}
            key={idx}
            className={`border-none shadow-none hover:!text-slate-300 ${val.isActive ? 'font-bold text-primary' : 'font-medium text-slate-600'} text-base hover:text-blue-300`}
          >
            {val.name}
          </Button>
        ))}
      </div>
      <CustomButton
        onClick={() => handleScrollTo('contact')}
        text="Contact me"
        isPrimary
        className={`hidden md:flex`}
      />
      <Button
        onClick={() => setOpen(!open)}
        className="flex h-fit items-center justify-center border-none bg-blue-50 px-3 py-2 md:hidden"
      >
        <HiMenuAlt4 className="text-3xl text-primary" />
      </Button>
      <Drawer
        title={title}
        closable={false}
        onClose={() => setOpen(false)}
        mask={false}
        open={open}
        width="100%"
      >
        <div className={`flex flex-col items-start gap-8`}>
          {activeSection.map((val, idx) => (
            <Button
              onClick={() => {
                handleScrollTo(val.id)
                setOpen(!open)
              }}
              key={idx}
              className={`border-none shadow-none hover:!text-slate-300 ${val.isActive ? 'font-bold text-primary' : 'font-medium text-slate-600'} text-lg hover:text-blue-300`}
            >
              {val.name}
            </Button>
          ))}
          <CustomButton
            onClick={() => {
              handleScrollTo('contact')
              setOpen(!open)
            }}
            text="Contact me"
            isPrimary
          />
        </div>
      </Drawer>
    </Header>
  )
}
