import React from 'react'

interface Props {
  period: string
  lembaga: string
  responsibility: string[]
  major: string
}

export const CardContent = ({
  responsibility,
  lembaga,
  period,
  major,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 border-l-4 border-slate-200 px-8 font-medium">
      <p className="mb-0 text-base text-slate-500">{period}</p>
      <h1 className="mb-0 text-3xl font-semibold text-slate-800">{lembaga}</h1>
      <div className="flex flex-col gap-3 text-lg text-slate-700">
        <p className="mb-0">{major}</p>
        <div>
          <p className="mb-0">Responsibility :</p>
          <ul className="list-outside list-disc">
            {responsibility.map((val, idx) => (
              <li key={idx}>{val}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
