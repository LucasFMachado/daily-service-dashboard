'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/Form'
import { useUser } from '@/hooks/useUsers'
import { updateUser } from '@/requests/users'
import { UserSchemas } from '@/schemas/UserSchema'
import { queryClient } from '@/services/queryClient'
import { TUpdateUser } from '@/types/User'

interface UpdateUserProps {
  userId: number
}

export function UpdateUser({ userId }: UpdateUserProps) {
  const router = useRouter()
  const { data: user, isLoading, isError } = useUser(userId)

  if (isLoading) {
    return <h1>Loading..</h1>
  }

  if (isError) {
    return <h1>Error on fetch user</h1>
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdateUser>({
    resolver: zodResolver(UserSchemas.update),
    defaultValues: user,
  })

  const { mutateAsync } = useMutation({
    mutationFn: (data: TUpdateUser) => updateUser(user.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-users'] })
    },
  })

  const submitData = async (data: TUpdateUser) => {
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

        <Form.Actions>
          <Form.CancelButton label="Cancel" route="users" />
          <Form.ConfirmButton label="Confirm" />
        </Form.Actions>
      </Form.Root>
    </main>
  )
}
