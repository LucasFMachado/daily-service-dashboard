'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/Form'
import { Layout } from '@/components/Layout'
import { createProtocol } from '@/requests/protocols'
import { ProtocolSchema } from '@/schemas/ProtocolSchema'
import { queryClient } from '@/services/queryClient'
import { TCreateProtocol } from '@/types/Protocol'
import { SOLICITATION_SITUATIONS } from '@/utils/consts'

export function CreateProtocol() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateProtocol>({
    resolver: zodResolver(ProtocolSchema.create),
  })

  const { mutateAsync } = useMutation({
    mutationFn: (data: TCreateProtocol) => createProtocol(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-protocols'] })
    },
  })

  const submitData = async (data: TCreateProtocol) => {
    await mutateAsync(data)
    router.push('/protocols')
  }

  return (
    <Layout.PageWrapper>
      <Form.Root onSubmit={handleSubmit(submitData)}>
        <Form.Select
          id="situation_id"
          label="Situation"
          error={errors.requestor?.message}
          options={SOLICITATION_SITUATIONS}
          {...register('situation_id', { valueAsNumber: true })}
        />

        <Form.Input
          id="requestor"
          label="Requestor"
          error={errors.requestor?.message}
          {...register('requestor')}
        />

        <Form.Input
          id="phone"
          label="Phone"
          error={errors.phone?.message}
          {...register('phone')}
        />

        <Form.Input
          id="postalCode"
          label="Postal Code"
          error={errors.postalCode?.message}
          {...register('postalCode')}
        />

        <Form.Input
          id="street"
          label="Street"
          error={errors.street?.message}
          {...register('street')}
        />

        <Form.Input
          id="number"
          label="Number"
          error={errors.number?.message}
          {...register('number')}
        />

        <Form.Input
          id="neighborhood"
          label="Neighborhood"
          error={errors.neighborhood?.message}
          {...register('neighborhood')}
        />

        <Form.Input
          id="city"
          label="City"
          error={errors.city?.message}
          {...register('city')}
        />

        <Form.Checkbox
          id="is_available"
          label="Is available"
          {...register('is_available')}
        />

        <Form.Input
          id="description"
          label="Description"
          error={errors.description?.message}
          {...register('description')}
        />

        <Form.Actions>
          <Form.CancelButton label="Cancel" route="protocols" />
          <Form.ConfirmButton label="Confirm" />
        </Form.Actions>
      </Form.Root>
    </Layout.PageWrapper>
  )
}
