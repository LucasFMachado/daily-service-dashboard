'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/Form'
import { useProtocol } from '@/hooks/useProtocols'
import { updateProtocol } from '@/requests/protocols'
import { ProtocolSchema } from '@/schemas/ProtocolSchema'
import { queryClient } from '@/services/queryClient'
import { TUpdateProtocol } from '@/types/Protocol'
import { SOLICITATION_SITUATIONS } from '@/utils/consts'

interface UpdateProtocolProps {
  protocolId: number
}

export function UpdateProtocol({ protocolId }: UpdateProtocolProps) {
  const router = useRouter()
  const { data: protocol, isLoading, isError } = useProtocol(protocolId)

  if (isLoading) {
    return <h1>Loading..</h1>
  }

  if (isError) {
    return <h1>Error on fetch protocol</h1>
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdateProtocol>({
    resolver: zodResolver(ProtocolSchema.update),
    defaultValues: protocol,
  })

  const { mutateAsync } = useMutation({
    mutationFn: (data: TUpdateProtocol) => updateProtocol(protocol.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-protocols'] })
    },
  })

  const submitData = async (data: TUpdateProtocol) => {
    await mutateAsync(data)
    router.push('/protocols')
  }

  return (
    <main className="h-screen p-4 flex items-center justify-center">
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
    </main>
  )
}
