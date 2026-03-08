import React from 'react'

interface Props {
  text: string
}

export const LabelPosition = ({ text }: Props) => {
  return (
    <div className="flex items-center rounded-full border border-solid border-slate-200 px-5 py-2 text-sm font-semibold text-blue-900">
      {text}
    </div>
  )
}
