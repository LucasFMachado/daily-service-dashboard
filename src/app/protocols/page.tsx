import { dehydrate } from '@tanstack/react-query'

import { ListProtocols } from '@/forms/protocols/list'
import { getProtocolList } from '@/requests/protocols'
import { Hydrate } from '@/services/hydrate'
import { queryClient } from '@/services/queryClient'

export default async function Users() {
  await queryClient.prefetchQuery(['list-protocols', 1], () =>
    getProtocolList(1),
  )
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ListProtocols />
    </Hydrate>
  )
}
