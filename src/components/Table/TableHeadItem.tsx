'use client'

import { ReactNode } from 'react'

interface TableHeadItemProps {
  children: ReactNode
}

export function TableHeadItem({ children }: TableHeadItemProps) {
  return <th className="text-center">{children}</th>
}
