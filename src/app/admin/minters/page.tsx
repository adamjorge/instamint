"use client"

import { columns } from "@/components/custom/admin/minters/columns"
import { AdminTable } from "@/components/custom/admin/table/admin-table"
import { AdminTablePagination } from "@/components/custom/admin/table/admin-table-pagination"
import Spinner from "@/components/custom/spinner"
import ErrorMessage from "@/components/ui/custom/error-message"
import fetchMinters, { MinterWithCount } from "@/lib/query/client/minters/fetchMinters"
import { PaginationProps } from "@/validators/types/paginationProps"
import { useQuery } from "@tanstack/react-query"
import { ColumnDef } from "@tanstack/react-table"
import { useState } from "react"

export default function Minters() {
  const [page, setPage] = useState(1)
  const { isPending, error, data } = useQuery({
    queryKey: ["minters", page],
    queryFn: () => fetchMinters(page)
  })

  if (isPending) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const tableProps: TableProps = { columns, data: data.minters }
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
  columns: ColumnDef<MinterWithCount>[]
  data: MinterWithCount[]
}
