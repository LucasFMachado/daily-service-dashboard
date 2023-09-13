'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/Form'
import { createUser } from '@/requests/users'
import { UserSchemas } from '@/schemas/UserSchema'
import { queryClient } from '@/services/queryClient'
import { TCreateUser } from '@/types/User'

export function CreateUser() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateUser>({
    resolver: zodResolver(UserSchemas.create),
  })

  const { mutateAsync } = useMutation({
    mutationFn: (data: TCreateUser) => createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-users'] })
    },
  })

  const submitData = async (data: TCreateUser) => {
    await mutateAsync(data)
    router.push('/users')
  }

  return (
    <main className="h-screen p-4 bg-emerald-200 flex items-center justify-center">
      <Form.Root onSubmit={handleSubmit(submitData)}>
        <Form.Input
          id="name"
          label="Name"
          error={errors.name?.message}
          {...register('name')}
        />

        <Form.Input
          id="email"
          label="E-mail"
          error={errors.email?.message}
          {...register('email')}
        />

        <Form.Input
          id="password"
          label="Password"
          type="password"
          error={errors.password?.message}
          {...register('password')}
        />

        <Form.Input
          id="password_confirm"
          label="Password"
          type="password"
          error={errors.password_confirm?.message}
          {...register('password_confirm')}
        />

        <Form.Actions>
          <Form.CancelButton label="Cancel" route="users" />
          <Form.ConfirmButton label="Confirm" />
        </Form.Actions>
      </Form.Root>
    </main>
  )
}
