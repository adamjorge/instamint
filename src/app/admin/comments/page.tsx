"use client"

import { AdminTable } from "@/components/custom/admin/table/admin-table"
import { AdminTablePagination } from "@/components/custom/admin/table/admin-table-pagination"
import { columns } from "@/components/custom/comments/columns"
import Spinner from "@/components/custom/spinner"
import ErrorMessage from "@/components/ui/custom/error-message"
import { fetchComments } from "@/lib/query/comments/fetchComments"
import type { Comments } from "@/validators/schemas/commentSchema"
import { PaginationProps } from "@/validators/types/paginationProps"
import { useQuery } from "@tanstack/react-query"
import type { ColumnDef } from "@tanstack/react-table"
import { useState } from "react"

export default function Comments() {
  const [page, setPage] = useState(1)
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", page],
    queryFn: () => fetchComments(page)
  })

  if (isPending) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const tableProps: TableProps = { columns, data: data.comments }
  const paginationProps: PaginationProps = {
    currentPage: page,
    totalPages: data.totalPages,
    setPage
  }

  return (
    <div className="container mx-auto mt-16 pb-5">
      <AdminTable {...tableProps} />
      <AdminTablePagination {...paginationProps} />
    </div>
  )
}

type TableProps = {
  columns: ColumnDef<{
    id: number
    content: string
    createdAt: string
    updatedAt: string | null
    nftId: number
    authorId: number | null
  }>[]
  data: Comments
}
