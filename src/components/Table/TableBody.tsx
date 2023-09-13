'use client'

import { ReactNode } from 'react'

interface TableBodyProps {
  children: ReactNode
}

export function TableBody({ children }: TableBodyProps) {
  return (
    <tbody className="border-b-2 border-t-2 border-indigo-300">
      {children}
    </tbody>
  )
}
