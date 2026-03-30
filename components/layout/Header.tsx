import { Button, Drawer, Layout } from 'antd'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CustomButton } from '../ui/CustomButton'
import Image from 'next/image'
import { HiMenuAlt4 } from 'react-icons/hi'

export interface MenuItem {
  id: string
  name: string
  isActive: boolean
  icon?: React.JSX.Element
}

const { Header } = Layout

const listMenu: MenuItem[] = [
  { name: 'Home', isActive: true, id: 'home' },
  { name: 'About me', isActive: false, id: 'about_me' },
  { name: 'Services', isActive: false, id: 'services' },
  { name: 'Project', isActive: false, id: 'project' },
]

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

  const handleScrollTo = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setOpen(false) // tutup drawer jika dari mobile
  }

  return (
    <Header
      className={`fixed z-50 flex h-fit w-full items-center justify-between bg-white px-6 py-2 sm:px-8 md:px-16 lg:px-24`}
    >
      <div
        className={`relative flex h-16 w-16 items-center gap-3 text-base font-semibold`}
      >
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
      <CustomButton text="Contact me" isPrimary className={`hidden md:flex`} />
      <Button
        onClick={() => setOpen(!open)}
        className="flex h-fit items-center justify-center border-none bg-blue-50 px-3 py-2 md:hidden"
      >
        <HiMenuAlt4 className="text-3xl text-primary" />
      </Button>
      <Drawer
        title="Basic Drawer"
        closable={{ 'aria-label': 'Close Button' }}
        onClose={() => setOpen(false)}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Header>
  )
}
