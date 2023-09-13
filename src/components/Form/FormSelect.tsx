import { forwardRef } from 'react'
import { MdErrorOutline } from 'react-icons/md'

type TSelectOption = {
  value: number
  label: string
}

interface FormSelectProps {
  id: string
  label: string
  error?: string
  options: TSelectOption[]
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  function Input({ id, label, error, options, ...props }, ref) {
    return (
      <div className="flex-col w-full">
        <div className="relative flex items-center">
          <select
            id={id}
            className={`px-4 py-2 h-10 rounded-lg text-sm w-full outline-none text-gray-500  ${
              error && 'border-2 border-red-400'
            }`}
            ref={ref}
            {...props}
          >
            <option value={0}>{label}</option>
            {options?.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {error && (
            <span className="absolute right-5 text-red-400 text-lg">
              <MdErrorOutline />
            </span>
          )}
        </div>
        <div className="h-4">
          <p className="px-1 text-xs text-red-400">{error}</p>
        </div>
      </div>
    )
  },
)
