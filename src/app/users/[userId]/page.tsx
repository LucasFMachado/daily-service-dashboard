import { dehydrate } from '@tanstack/react-query'

import { UpdateUser } from '@/forms/users/update'
import { getUser } from '@/requests/users'
import { Hydrate } from '@/services/hydrate'
import { queryClient } from '@/services/queryClient'

interface UserProps {
  params: {
    userId: number
  }
}

export default async function User({ params }: UserProps) {
  await queryClient.prefetchQuery(['get-user', params.userId], () =>
    getUser(params.userId),
  )
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <UpdateUser userId={params.userId} />
    </Hydrate>
  )
}
