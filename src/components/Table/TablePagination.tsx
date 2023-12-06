import { LIST_FIRST_PAGE, LIST_REGISTERS_PER_PAGE } from '@/utils/consts'

import { TablePaginationitem } from './TablePaginationitem'

interface TablePaginationProps {
  totalRegister: number
  registerPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(page => page > 0)
}

export function TablePagination({
  totalRegister,
  registerPerPage = LIST_REGISTERS_PER_PAGE,
  currentPage = LIST_FIRST_PAGE,
  onPageChange,
}: TablePaginationProps) {
  const lastPage = Math.ceil(totalRegister / registerPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : []

  const firstRegisterOnPage = registerPerPage * (currentPage - 1)

  const lastRegisterOnPage =
    currentPage < lastPage
      ? firstRegisterOnPage + registerPerPage
      : totalRegister

  return (
    <div className="flex justify-between text-center gap-4 pt-2">
      <div>
        <strong>{firstRegisterOnPage + 1}</strong> -{' '}
        <strong>{lastRegisterOnPage}</strong> de{' '}
        <strong>{totalRegister}</strong>
      </div>
      <div className="flex gap-1">
        {currentPage > 1 + siblingsCount && (
          <>
            <TablePaginationitem number={1} onPageChange={onPageChange} />
            {currentPage > 2 + siblingsCount && (
              <p className="text-gray-500 w-8 text-center">...</p>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map(page => (
            <TablePaginationitem
              key={page}
              number={page}
              onPageChange={onPageChange}
            />
          ))}

        <TablePaginationitem
          number={currentPage}
          isCurrent
          onPageChange={onPageChange}
        />

        {nextPages.length > 0 &&
          nextPages.map(page => (
            <TablePaginationitem
              key={page}
              number={page}
              onPageChange={onPageChange}
            />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <p className="text-gray-500 w-8 text-center">...</p>
            )}
            <TablePaginationitem
              number={lastPage}
              onPageChange={onPageChange}
            />
          </>
        )}
      </div>
    </div>
  )
}
