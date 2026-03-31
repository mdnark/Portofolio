import React from 'react'

interface Props {
  text: string
  className?: string
}

export const TitleSection = ({ text, className }: Props) => {
  return (
    <h1 className={`text-primary font-semibold text-4xl mb-0 ${className}`}>
      {text}
    </h1>
  )
}
