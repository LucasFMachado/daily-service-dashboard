import { dehydrate } from '@tanstack/react-query'

import { ListUsers } from '@/forms/users/list'
import { getUsersList } from '@/requests/users'
import { Hydrate } from '@/services/hydrate'
import { queryClient } from '@/services/queryClient'

export default async function Users() {
  await queryClient.prefetchQuery(['list-users', 1], () => getUsersList(1))
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ListUsers />
    </Hydrate>
  )
}
