import { Button } from 'antd'
import React from 'react'

interface Props {
  text: string
  icon?: React.ReactNode
  isPrimary?: boolean
  className?: React.ReactNode
}

export const CustomButton = ({ isPrimary, text, icon, className }: Props) => {
  return (
    <Button
      className={`${className} flex h-fit items-center rounded-full px-4 py-2 text-sm font-semibold ${isPrimary ? 'bg-primary text-white hover:!bg-blue-600 hover:!text-white' : 'border border-slate-200 text-blue-900 hover:!text-blue-900'}`}
    >
      {icon}
      {text}
    </Button>
  )
}
