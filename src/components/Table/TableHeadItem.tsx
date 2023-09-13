'use client'

import { ReactNode } from 'react'

interface TableHeadItemProps {
  children: ReactNode
}

export function TableHeadItem({ children }: TableHeadItemProps) {
  return <th className="py-2 px-8">{children}</th>
}
