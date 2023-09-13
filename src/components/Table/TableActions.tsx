'use client'

import { useRouter } from 'next/navigation'
import { BiSolidPencil, BiTrash } from 'react-icons/bi'

interface TableActionsProps {
  id: number
  route: string
  onDelete: (id: number) => Promise<void>
}

export function TableActions({ id, route, onDelete }: TableActionsProps) {
  const router = useRouter()

  return (
    <td className="flex items-center justify-center gap-3 py-2 px-8">
      <button onClick={() => router.push(`/${route}/${id}`)}>
        <BiSolidPencil className="text-green-700 text-xl" />
      </button>
      <button onClick={() => onDelete(id)}>
        <BiTrash className="text-red-700 text-xl" />
      </button>
    </td>
  )
}
