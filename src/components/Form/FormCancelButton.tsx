import { useRouter } from 'next/navigation'
import { ComponentProps } from 'react'

interface FormCancelButtonProps extends ComponentProps<'button'> {
  route: string
  label: string
}

export function FormCancelButton({
  route,
  label,
  ...props
}: FormCancelButtonProps) {
  const router = useRouter()

  const handleRedirect = () => router.push(`/${route}`)

  return (
    <button
      type="button"
      className="w-full bg-red-500 text-white h-10 rounded-lg hover:bg-red-600 transition"
      onClick={handleRedirect}
      {...props}
    >
      {label}
    </button>
  )
}
