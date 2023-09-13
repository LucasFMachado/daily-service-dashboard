'use client'

import { ReactNode } from 'react'

interface TableContainerProps {
  children: ReactNode
}

export function TableContainer({ children }: TableContainerProps) {
  return (
    <main className="h-screen p-4 bg-emerald-100 flex items-center justify-center">
      <div className="bg-blue-300 rounded">{children}</div>
    </main>
  )
}
