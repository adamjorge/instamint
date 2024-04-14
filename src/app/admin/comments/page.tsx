"use client"

import { columns } from "@/components/custom/comments/columns"
import { CommentsTable } from "@/components/custom/comments/comments-table"
import { fetchComments } from "@/lib/query/comments/fetchComments"
import { useQuery } from "@tanstack/react-query"

export default function Comments() {
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
    <div className="container mx-auto mt-16">
      <CommentsTable columns={columns} data={data} />
    </div>
  )
}
