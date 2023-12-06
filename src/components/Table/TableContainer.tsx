'use client'

import { ReactNode } from 'react'

interface TableContainerProps {
  children: ReactNode
}

export function TableContainer({ children }: TableContainerProps) {
  return (
    <main className="h-screen p-4 flex items-center justify-center">
      <div className="bg-slate-300 rounded p-4 w-full">{children}</div>
    </main>
  )
}
