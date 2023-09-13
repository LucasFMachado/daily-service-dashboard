interface TablePaginationitemProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export function TablePaginationitem({
  number,
  isCurrent = false,
  onPageChange,
}: TablePaginationitemProps) {
  if (isCurrent) {
    return (
      <button disabled className="bg-red-400 w-8 h-8 text-xs">
        {number}
      </button>
    )
  }

  return (
    <button
      onClick={() => onPageChange(number)}
      className="bg-red-500 w-8 h-8 text-xs"
    >
      {number}
    </button>
  )
}
