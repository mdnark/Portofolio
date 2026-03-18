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

  return (
    <Header
      className={`z-50 flex h-fit items-center justify-between bg-white px-6 py-5 sm:px-8 md:px-16 lg:px-32`}
    >
      <div
        className={`relative flex h-14 w-14 items-center gap-3 text-base font-semibold`}
      >
        <Image src={'/logo.png'} alt="" fill className="object-contain" />
      </div>
      <div className={`hidden items-center gap-7 md:flex lg:gap-12`}>
        {activeSection.map((val, idx) => (
          <Link
            href={`#${val.id}`}
            key={idx}
            className={`${val.isActive ? 'font-semibold text-blue-600' : 'font-medium text-slate-600'} text-base hover:text-blue-300`}
          >
            {val.name}
          </Link>
        ))}
        <CustomButton text="Contact me" isPrimary />
      </div>
      <Button
        onClick={() => setOpen(!open)}
        className="flex h-fit items-center justify-center border border-slate-300 px-3 py-2 md:hidden"
      >
        <HiMenuAlt4 className="text-2xl text-slate-600" />
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
