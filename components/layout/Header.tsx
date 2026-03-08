import { Layout } from 'antd'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CustomButton } from '../ui/CustomButton'
import Image from 'next/image'

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
      className={`h-fit flex px-24 py-5 bg-white justify-between items-center z-50`}
    >
      <div className={`flex gap-3 items-center font-semibold text-base `}>
        <Image src={'/logo.ico'} alt="" width={40} height={30} />
        <p className={`text-slate-600 !mb-0`}>M Danar Kahfi</p>
      </div>
      <div className={`flex items-center gap-12`}>
        {activeSection.map((val, idx) => (
          <Link
            href={`#${val.id}`}
            key={idx}
            className={`${val.isActive ? 'text-blue-600 font-semibold ' : 'text-slate-600 font-medium'} text-lg  hover:text-blue-300 md:text-sm`}
          >
            {val.name}
          </Link>
        ))}
        <CustomButton text="Contact me" isPrimary />
      </div>
    </Header>
  )
}
