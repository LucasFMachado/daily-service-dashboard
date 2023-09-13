import { forwardRef } from 'react'

interface FormCheckboxProps {
  id: string
  label: string
}

export const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>(
  function Input({ id, label, ...props }, ref) {
    return (
      <div className="relative flex items-center gap-2">
        <input id={id} type="checkbox" ref={ref} {...props} />
        <label htmlFor={id} className="text-sm text-gray-500">
          {label}
        </label>
      </div>
    )
  },
)
