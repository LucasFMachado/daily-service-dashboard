'use client'

import { useRouter } from 'next/navigation'

import { Layout } from '../Layout'

interface TableTitleProps {
  title: string
  route: string
}

export function TableTitle({ title, route }: TableTitleProps) {
  const router = useRouter()

  return (
    <div className="flex justify-between pb-4 items-center">
      <h5 className="font-bold text-emerald-600">{title}</h5>
      <Layout.DefaultButton
        label="Create"
        onClick={() => router.push(`/${route}/create`)}
        className="w-fit px-4"
      />
    </div>
  )
}
