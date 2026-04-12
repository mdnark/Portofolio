import React from 'react'

interface Props {
  title: string
  children: React.ReactNode
}

export const FooterColumn = ({ children, title }: Props) => {
  return (
    <nav className="flex flex-col gap-4 text-sm" aria-label={title}>
      <h3 className="font-semibold text-primary">{title}</h3>
      <div className="flex flex-col items-start gap-2 !font-medium !text-slate-500">
        {children}
      </div>
    </nav>
  )
}
