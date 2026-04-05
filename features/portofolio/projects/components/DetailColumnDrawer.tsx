import React from 'react'

interface Props {
  title: string
  children: React.ReactNode
}

export const DetailColumnDrawer = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col gap-4 text-lg font-medium text-slate-700">
      <h1 className="mb-0 text-2xl font-semibold text-slate-800">{title}</h1>
      {children}
    </div>
  )
}
