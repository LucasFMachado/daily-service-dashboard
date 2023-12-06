import { ComponentProps } from 'react'
import { BiPlus } from 'react-icons/bi'
import { twMerge } from 'tailwind-merge'

interface LayoutDefaultButtonProps extends ComponentProps<'button'> {
  label: string
  className?: string
}

export function LayoutDefaultButton({
  label,
  className,
  ...props
}: LayoutDefaultButtonProps) {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center gap-1 w-full bg-emerald-500 text-white h-10 rounded-lg hover:bg-emerald-600 transition',
        className,
      )}
      {...props}
    >
      <BiPlus size={25} />
      {label}
    </button>
  )
}
