'use client'

import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

import { Layout } from '@/components/Layout'
import { Table } from '@/components/Table'
import { useUsersList } from '@/hooks/useUsers'
import { deleteUser } from '@/requests/users'
import { queryClient } from '@/services/queryClient'

export function ListUsers() {
  const [page, setPage] = useState(1)
  const { users, count, isLoading, isError } = useUsersList(page)

  const onPageChange = (newPage: number) => {
    setPage(newPage)
  }

  const { mutateAsync } = useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-users'] })
    },
  })

  const onDelete = async (id: number) => {
    await mutateAsync(id)
  }

  if (isLoading) {
    return <h1>Loading..</h1>
  }

  if (isError) {
    return <h1>Error on fetch users</h1>
  }

  return (
    <Table.Container>
      <Table.Root>
        <Table.Head>
          <Table.Line>
            <Table.HeadItem>Name</Table.HeadItem>
            <Table.HeadItem>E-mail</Table.HeadItem>
            <Table.HeadItem>Active</Table.HeadItem>
            <Table.HeadItem>Admin</Table.HeadItem>
            <Table.HeadItem>Created at</Table.HeadItem>
            <Table.HeadItem>Actions</Table.HeadItem>
          </Table.Line>
        </Table.Head>
        <Table.Body>
          {users?.map(user => (
            <Table.Line key={user.id}>
              <Table.BodyItem>{user.name}</Table.BodyItem>
              <Table.BodyItem>{user.email}</Table.BodyItem>
              <Table.BodyItem>
                <Layout.BooleanFlag success={user.active} />
              </Table.BodyItem>
              <Table.BodyItem>
                <Layout.BooleanFlag success={user.admin} />
              </Table.BodyItem>
              <Table.BodyItem>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(user.created_at),
                )}
              </Table.BodyItem>
              <Table.Actions
                id={user.id}
                route="users"
                onDelete={() => onDelete(user.id)}
              />
            </Table.Line>
          ))}
        </Table.Body>
      </Table.Root>
      <Table.Pagination
        totalRegister={count || 0}
        currentPage={page}
        onPageChange={onPageChange}
      />
    </Table.Container>
  )
}
