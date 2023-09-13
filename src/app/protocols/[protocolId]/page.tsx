import { dehydrate } from '@tanstack/react-query'

import { UpdateProtocol } from '@/forms/protocols/update'
import { getProtocol } from '@/requests/protocols'
import { Hydrate } from '@/services/hydrate'
import { queryClient } from '@/services/queryClient'

interface ProtocolProps {
  params: {
    protocolId: number
  }
}

export default async function Protocol({ params }: ProtocolProps) {
  await queryClient.prefetchQuery(['get-protocol', params.protocolId], () =>
    getProtocol(params.protocolId),
  )
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <UpdateProtocol protocolId={params.protocolId} />
    </Hydrate>
  )
}
