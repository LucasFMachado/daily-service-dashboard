import '../styles/globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Sidebar } from '@/components/Sidebar'
import { ContextsProviders } from '@/contexts'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ContextsProviders>
          <div className="flex">
            <Sidebar />
            <main className="w-full flex items-center justify-center">
              {children}
            </main>
          </div>
        </ContextsProviders>
      </body>
    </html>
  )
}
