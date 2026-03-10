'use client'

import { HeaderPage } from '#/components/layout/Header'
import { Layout } from 'antd'
import React from 'react'

const { Content } = Layout

export default function LayoutMain({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <HeaderPage />
      <Content
        className="!h-full no-scrollbar !min-h-[calc(100vh-84px)] pb-6 bg-white"
      >
        {children}
      </Content>
    </Layout>
  )
}
