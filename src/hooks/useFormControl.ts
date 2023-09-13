import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ZodTypeAny } from 'zod'

import { ILoginForm } from '@/types/User'

export const useFormControl = (schema: ZodTypeAny) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: zodResolver(schema),
  })

  return {
    register,
    handleSubmit,
    errors,
  }
}
