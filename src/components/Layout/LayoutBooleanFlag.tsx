'use client'

interface LayoutBooleanFlagProps {
  success?: boolean
}

export function LayoutBooleanFlag({ success = true }: LayoutBooleanFlagProps) {
  return (
    <div
      className={`h-4 w-4 rounded-lg ${
        success ? 'bg-green-700' : 'bg-red-700'
      }`}
    />
  )
}
