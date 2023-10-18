import './globals.css'
import { Suspense } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { PHProvider, PostHogPageview } from './providers'

const newake = localFont({
  src: './fonts/Newake.otf',
  display: 'swap',
  variable: '--font-newake',
})

export const metadata: Metadata = {
  title: 'Jonny Xu',
  description: 'Full stack + MLOps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{
      scrollSnapType: 'y mandatory',
    }}>
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body className={`${newake.variable}`}>{children}</body>
      </PHProvider>
    </html>
  )
}
