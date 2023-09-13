'use client'

import { ReactNode } from 'react'

interface LayoutPageWrapperProps {
  children: ReactNode
}

export function LayoutPageWrapper({ children }: LayoutPageWrapperProps) {
  return (
    <main className="h-screen p-4 bg-slate-200 flex items-center justify-center">
      {children}
    </main>
  )
}
