import { ComponentProps } from 'react'

interface LayoutDefaultButtonProps extends ComponentProps<'button'> {
  label: string
}

export function LayoutDefaultButton({
  label,
  ...props
}: LayoutDefaultButtonProps) {
  return (
    <button
      className="w-full bg-emerald-500 text-white h-10 rounded-lg hover:bg-emerald-600 transition"
      {...props}
    >
      {label}
    </button>
  )
}
