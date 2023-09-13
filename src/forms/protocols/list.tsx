'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Layout } from '@/components/Layout'
import { Table } from '@/components/Table'
import { useProtocolList } from '@/hooks/useProtocols'
import { deleteProtocol } from '@/requests/protocols'
import { queryClient } from '@/services/queryClient'

export function ListProtocols() {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const { protocols, count, isLoading, isError } = useProtocolList(page)

  const onPageChange = (newPage: number) => {
    setPage(newPage)
  }

  const { mutateAsync } = useMutation({
    mutationFn: (id: number) => deleteProtocol(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list-protocols'] })
    },
  })

  const onDelete = async (id: number) => {
    await mutateAsync(id)
  }

  if (isLoading) {
    return <h1>Loading..</h1>
  }

  if (isError) {
    return <h1>Error on fetch protocols</h1>
  }

  return (
    <Table.Container>
      <Layout.DefaultButton
        label="Create"
        onClick={() => router.push('/protocols/create')}
      />
      <Table.Root>
        <Table.Head>
          <Table.Line>
            <Table.HeadItem>Number</Table.HeadItem>
            <Table.HeadItem>Situation</Table.HeadItem>
            <Table.HeadItem>City</Table.HeadItem>
            <Table.HeadItem>Available</Table.HeadItem>
            <Table.HeadItem>Created at</Table.HeadItem>
          </Table.Line>
        </Table.Head>
        <Table.Body>
          {protocols?.map(protocol => (
            <Table.Line key={protocol.id}>
              <Table.BodyItem>{protocol.id}</Table.BodyItem>
              <Table.BodyItem>{protocol.situation_id}</Table.BodyItem>
              <Table.BodyItem>{protocol.city}</Table.BodyItem>
              <Table.BodyItem>
                <Layout.BooleanFlag success={protocol.is_available} />
              </Table.BodyItem>

              <Table.BodyItem>
                {new Intl.DateTimeFormat('en-GB').format(
                  new Date(protocol.created_at),
                )}
              </Table.BodyItem>
              <Table.Actions
                id={protocol.id}
                route="protocols"
                onDelete={() => onDelete(protocol.id)}
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
