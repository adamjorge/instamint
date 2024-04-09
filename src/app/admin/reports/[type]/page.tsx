"use client"

import { useParams } from "next/navigation"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ReportsSchema } from "@/validators/schemas/reportsSchema"
import type { Report } from "@/validators/types/reports"
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
    <div className="w-3/4">
      {!data.length ? (
        <div>No reports found on minters</div>
      ) : (
        data.map((minter) => (
          <Card key={minter.id} className="mt-3">
            <CardHeader>
              <CardTitle>{minter.username}</CardTitle>
              <CardDescription>{minter.email}</CardDescription>
            </CardHeader>
            <CardFooter>
              <p>ID : {minter.id}</p>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  )
}
