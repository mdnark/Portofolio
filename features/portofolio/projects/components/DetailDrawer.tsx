import { TitleSection } from '#/components/ui/TitleSection'
import { Button, Drawer } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiLink, HiX } from 'react-icons/hi'
import { ProjectDetail } from '../type'
import { DetailColumnDrawer } from './DetailColumnDrawer'
import { useBreakpoint } from '#/hooks/useBreakpoint'

type Props = {
  open: boolean
  setOpen: (val: boolean) => void
  datas: ProjectDetail | null
}

export const DetailDrawer = ({ open, setOpen, datas }: Props) => {
  const { isMobile } = useBreakpoint()

  const header = (
    <div className="flex items-center gap-6">
      <Button
        onClick={() => setOpen(!open)}
        className="flex h-fit w-fit items-center justify-center rounded-full border-none bg-blue-50 p-2"
      >
        <HiX className="text-2xl text-primary" />
      </Button>
      <TitleSection text="Detail Project" />
    </div>
  )

  return (
    <Drawer
      title={header}
      closable={false}
      onClose={() => setOpen(false)}
      open={open}
      width="100%"
      height="90%"
      placement="bottom"
    >
      <div className="relative flex flex-col-reverse gap-6 lg:flex-row">
        <div className="flex flex-1 flex-col gap-6 p-5 text-lg font-medium text-slate-700">
          <div className="flex flex-col gap-2 border-b border-slate-200 pb-6">
            <p className="mb-0 text-slate-500">{datas?.project.period}</p>
            <h1 className="mb-0 text-3xl font-semibold text-slate-800">
              {datas?.project.name}
            </h1>
            <p className="mb-0 flex items-center">
              <span className={isMobile ? 'hidden' : 'mr-1 flex'}>Role :</span>{' '}
              {datas?.project.role.join(' & ')}
            </p>
            {datas?.project.repository && (
              <Link
                href={datas?.project.repository ?? ''}
                className="flex items-center gap-2 text-slate-500"
              >
                <HiLink /> <span>View Source Code</span>
              </Link>
            )}
          </div>

          <DetailColumnDrawer title="Project Overview">
            <p className="mb-0 whitespace-pre-line">
              {datas?.overview.description}
            </p>
          </DetailColumnDrawer>

          <DetailColumnDrawer title="Problem Statement">
            <ul className="list-outside list-disc">
              {datas?.problemStatement.map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </DetailColumnDrawer>

          <DetailColumnDrawer title="Solution">
            <ul className="list-outside list-disc">
              {datas?.solution.map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </DetailColumnDrawer>

          <DetailColumnDrawer title="UI Design">
            <div className="flex flex-col gap-1">
              <h2 className="mb-0 font-semibold">Design System:</h2>
              <ul className="list-outside list-disc">
                {Object.entries(datas?.uiDesign.designSystem ?? {}).map(
                  ([key, val], idx) =>
                    val ? (
                      <li key={idx}>
                        <span className="capitalize">
                          {key.replace(/([A-Z])/g, ' $1')}:{' '}
                        </span>
                        {val}
                      </li>
                    ) : null,
                )}
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="mb-0 font-semibold">Highlight UI:</h2>
              <ul className="list-outside list-disc">
                {datas?.uiDesign.highlights.map((val, idx) => (
                  <li key={idx}>{val}</li>
                ))}
              </ul>
            </div>
          </DetailColumnDrawer>

          {datas?.frontEndImplementation && (
            <DetailColumnDrawer title="Front-End Implementation">
              <div className="flex flex-col gap-1">
                <h2 className="mb-0 font-semibold">Tech Stack:</h2>
                <ul className="list-outside list-disc">
                  {datas?.project.techStack.map((val, idx) => (
                    <li key={idx}>{val}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="mb-0 font-semibold">Key Features:</h2>
                <ul className="list-outside list-disc">
                  {Object.entries(
                    datas?.frontEndImplementation?.keyFeatures ?? {},
                  ).map(([key, val], idx) => (
                    <li key={idx}>
                      <span className="capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}:
                      </span>
                      <ul className="list-disc pl-4">
                        {val.map((val: string, i: string) => (
                          <li key={i}>{val}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </DetailColumnDrawer>
          )}

          <DetailColumnDrawer title="Challenges & Solutions">
            <div className="flex flex-col gap-1">
              <h2 className="mb-0 font-semibold">Challenges:</h2>
              <ul className="list-outside list-disc">
                {datas?.challengesAndSolutions.challenges.map((val, idx) => (
                  <li key={idx}>{val}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="mb-0 font-semibold">Solutions:</h2>
              <ul className="list-outside list-disc">
                {datas?.challengesAndSolutions.solutions.map((val, idx) => (
                  <li key={idx}>{val}</li>
                ))}
              </ul>
            </div>
          </DetailColumnDrawer>

          <DetailColumnDrawer title="Learnings">
            <ul className="list-outside list-disc">
              {datas?.learnings.map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </DetailColumnDrawer>

          <DetailColumnDrawer title=" Result / Impact">
            <ul className="list-outside list-disc">
              {datas?.resultImpact.map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </DetailColumnDrawer>
        </div>
        <div className="relative top-0 h-fit w-full shrink-0 rounded-3xl shadow-[17px_17px_44px_0px_rgba(0,104,255,0.05),_-8px_-8px_44px_0px_rgba(0,104,255,0.05)] lg:sticky lg:w-1/2">
          <div className="relative aspect-[4/3]">
            <Image
              src={datas?.project.src ?? ''}
              alt=""
              fill
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </Drawer>
  )
}
