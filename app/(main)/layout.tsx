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
      <Content className="no-scrollbar mt-20 !h-full !min-h-[calc(100vh-84px)] overflow-clip bg-white">
        {children}
      </Content>
    </Layout>
  )
}
