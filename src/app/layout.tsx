

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CompareProvider } from '../context/CompareContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deal Finder - Compare & Shop',
  description: 'Discover and compare products from multiple platforms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CompareProvider>
          {children}
        </CompareProvider>
      </body>
    </html>
  )
}