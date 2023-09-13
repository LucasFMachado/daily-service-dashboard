import { ReactNode } from 'react'

interface FormActionsProps {
  children: ReactNode
}

export function FormActions({ children }: FormActionsProps) {
  return (
    <div className="w-full flex items-center justify-end gap-4">{children}</div>
  )
}
