"use client"

import { columns } from "@/app/admin/comments/columns"
import { DataTable } from "@/app/admin/comments/data-table"
import { fetchComments } from "@/lib/query/comments/fetchComments"
import { useQuery } from "@tanstack/react-query"

export default function DemoPage() {
  const { isPending, error, data } = useQuery({
    queryKey: ["comments"],
    queryFn: fetchComments
  })

  if (isPending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
