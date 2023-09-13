import { useQuery } from '@tanstack/react-query'

import { getProtocol, getProtocolList } from '@/requests/protocols'

export const useProtocolList = (page: number) => {
  const query = useQuery({
    queryKey: ['list-protocols', page],
    queryFn: () => getProtocolList(page),
    staleTime: 1000 * 60 * 60, // 1 hour
  })

  return {
    protocols: query.data?.list,
    count: query.data?.count,
    ...query,
  }
}

export const useProtocol = (id: number) => {
  const query = useQuery({
    queryKey: ['get-protocol', id],
    queryFn: () => getProtocol(id),
    staleTime: 1000 * 60 * 2, // 2 minutes
  })

  return query
}
