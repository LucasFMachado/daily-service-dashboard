import { forwardRef } from 'react'
import { MdErrorOutline } from 'react-icons/md'

interface FormInputProps {
  id: string
  label: string
  error: string | undefined
  type?: string
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  function Input({ id, error, label, type = 'text', ...props }, ref) {
    return (
      <div className="flex-col w-full">
        <div className="relative flex items-center">
          <input
            id={id}
            type={type}
            placeholder={label}
            className={`px-4 py-2 h-10 rounded-lg text-sm w-full outline-none text-gray-500  ${
              error && 'border-2 border-red-400'
            }`}
            ref={ref}
            {...props}
          />
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
