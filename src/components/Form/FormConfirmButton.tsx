interface FormConfirmButtonProps {
  label: string
}

export function FormConfirmButton({ label }: FormConfirmButtonProps) {
  return (
    <button
      type="submit"
      className="w-full bg-blue-500 text-white h-10 rounded-lg hover:bg-blue-600 transition"
    >
      {label}
    </button>
  )
}
