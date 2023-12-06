'use client'

import { ReactNode } from 'react'

interface LayoutPageWrapperProps {
  children: ReactNode
}

export function LayoutPageWrapper({ children }: LayoutPageWrapperProps) {
  return (
    <main className="h-screen p-4 flex items-center justify-center">
      {children}
    </main>
  )
}
