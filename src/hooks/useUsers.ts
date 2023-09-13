import { useQuery } from '@tanstack/react-query'

import { getUser, getUserList } from '@/requests/users'

export const useUsersList = (page: number) => {
  const query = useQuery({
    queryKey: ['list-users', page],
    queryFn: () => getUserList(page),
    staleTime: 1000 * 60 * 60, // 1 hour
  })

  return {
    users: query.data?.list,
    count: query.data?.count,
    ...query,
  }
}

export const useUser = (id: number) => {
  const query = useQuery({
    queryKey: ['get-user', id],
    queryFn: () => getUser(id),
    staleTime: 1000 * 60 * 2, // 2 minutes
  })

  return query
}
