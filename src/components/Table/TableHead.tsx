'use client'

import { ReactNode } from 'react'

interface TableHeadProps {
  children: ReactNode
}

export function TableHead({ children }: TableHeadProps) {
  return <thead>{children}</thead>
}
