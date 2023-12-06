'use client'

import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface TableBodyItemProps {
  children: ReactNode
  className?: string
}

export function TableBodyItem({ children, className }: TableBodyItemProps) {
  return <td className={twMerge('py-2', className)}>{children}</td>
}
