import React from 'react'

interface Props {
  text: string
  className?: string
}

export const SubTitleSection = ({ text, className }: Props) => {
  return (
    <p className={`w-full text-slate-900 mb-0 text-base text-center ${className}`}>
      {text}
    </p>
  )
}
