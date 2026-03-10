import React from 'react'

interface Props {
  text: string
}

export const LabelPosition = ({ text }: Props) => {
  return (
    <div className="flex items-center rounded-full bg-slate-100 px-5 py-2 text-xs font-semibold text-blue-900">
      {text}
    </div>
  )
}
