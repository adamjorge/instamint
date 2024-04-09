"use client"

import { useParams } from "next/navigation"

import type { Report } from "@/validators/types/reports"
import { ReportsSchema } from "@/validators/zod/ReportsSchema"
import { useQuery } from "@tanstack/react-query"
import axios, { isAxiosError } from "axios"

export default function Reports() {
  const { type } = useParams<{ type: Report }>()
  const fetchReports = () =>
    axios
      .get(`/api/reports/${type}`)
      .then((res) => ReportsSchema.parse(res.data))
      .catch((err: unknown) => {
        if (isAxiosError(err)) {
          throw new Error(err.message)
        }

        throw new Error(err as string)
      })
  const { isPending, error, data } = useQuery({
    queryKey: ["reports"],
    queryFn: fetchReports
  })

  if (isPending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      {data.map((minter) => (
        <div key={minter.id}>
          <h2>{minter.username}</h2>
          <p>{minter.email}</p>
        </div>
      ))}
    </div>
  )
}
