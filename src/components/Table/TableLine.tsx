'use client'

import { ReactNode } from 'react'

interface TableLineProps {
  children: ReactNode
}

export function TableLine({ children, ...props }: TableLineProps) {
  return <tr {...props}>{children}</tr>
}
