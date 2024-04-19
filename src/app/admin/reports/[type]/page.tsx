"use client"

import { useParams } from "next/navigation"

import ReportCard from "@/components/custom/reports/report-card"
import { fetchReports } from "@/lib/query/reports/fetchReports"
import type { ReportType } from "@/validators/types/reportType"
import { useQuery } from "@tanstack/react-query"

export default function Reports() {
  const { type } = useParams<{ type: ReportType }>()
  const { isPending, error, data } = useQuery({
    queryKey: ["reports", type],
    queryFn: () => fetchReports(type)
  })

  if (isPending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="mt-16 w-1/2 pb-5">
      {!data.length ? (
        <span>No reports found on {type}</span>
      ) : (
        data.map((report) => <ReportCard key={report.id} report={report} type={type} />)
      )}
    </div>
  )
}
