"use client"

import { useParams } from "next/navigation"

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ReportsSchema } from "@/validators/schemas/reportSchema"
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
        <span>No reports found on minters</span>
      ) : (
        data.map((report) => (
          <Card key={report.id} className="mt-3">
            <CardHeader>
              <CardTitle>{report.id}</CardTitle>
              <CardDescription>{report.content}</CardDescription>
            </CardHeader>
            <CardFooter>
              <p>Created at : {report.createdAt.substring(0, 10)}</p>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  )
}
