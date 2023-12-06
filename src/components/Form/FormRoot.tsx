import { ReactNode } from 'react'

interface FormRootProps {
  children: ReactNode
  onSubmit: () => void
}

export function FormRoot({ children, onSubmit }: FormRootProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-start w-[350px] rounded-lg p-6 gap-2"
    >
      {children}
    </form>
  )
}
