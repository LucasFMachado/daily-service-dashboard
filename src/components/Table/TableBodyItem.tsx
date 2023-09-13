'use client'

import { ReactNode } from 'react'

interface TableBodyItemProps {
  children: ReactNode
}

export function TableBodyItem({ children }: TableBodyItemProps) {
  return <td className={`py-2 px-8`}>{children}</td>
}
