import './globals.css'
import 'antd/dist/reset.css'
import { Provider } from './provider'
import Script from 'next/script'
import { Poppins } from 'next/font/google'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'M Danar Kahfi | Front-End Developer & UI/UX Designer',
  description: 'Front-End Developer & UI/UX Designer Portfolio',
  icons: {
    icon: '/logo.ico',
  },
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Script src="/api/env" strategy={'beforeInteractive'}></Script>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
