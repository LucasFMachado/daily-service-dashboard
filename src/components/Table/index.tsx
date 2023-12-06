'use client'

import { TableActions } from './TableActions'
import { TableBody } from './TableBody'
import { TableBodyItem } from './TableBodyItem'
import { TableContainer } from './TableContainer'
import { TableHead } from './TableHead'
import { TableHeadItem } from './TableHeadItem'
import { TableLine } from './TableLine'
import { TablePagination } from './TablePagination'
import { TableRoot } from './TableRoot'
import { TableTitle } from './TableTitle'

export const Table = {
  Container: TableContainer,
  Root: TableRoot,
  Line: TableLine,
  Head: TableHead,
  HeadItem: TableHeadItem,
  Body: TableBody,
  BodyItem: TableBodyItem,
  Actions: TableActions,
  Pagination: TablePagination,
  Title: TableTitle,
}
