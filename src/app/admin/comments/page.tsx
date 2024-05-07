"use client"

import { columns } from "@/components/custom/comments/columns"
import { CommentsTable } from "@/components/custom/comments/comments-table"
import { CommentsPagination } from "@/components/custom/comments/pagination/comments-pagination"
import { fetchComments } from "@/lib/query/comments/fetchComments"
import type { Comments } from "@/validators/schemas/commentSchema"
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
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const tableProps: TableProps = { columns, data: data.comments }
  const paginationProps: PaginationProps = {
    currentPage: page,
    totalPages: data.totalPages,
    setPage
  }

  return (
    <div className="container mx-auto mt-16 pb-5">
      <CommentsTable {...tableProps} />
      <CommentsPagination {...paginationProps} />
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

type PaginationProps = {
  currentPage: number
  totalPages: number
  setPage: (page: number) => void
}
