import type { Metadata } from 'next'
import { Montserrat as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Trackr',
  description:
    'Manage, record and track the performance of your loans efficiently',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased w-full',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
