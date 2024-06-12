"use client"

import ReportCard from "@/components/custom/admin/reports/report-card"
import Spinner from "@/components/custom/spinner"
import ErrorMessage from "@/components/ui/custom/error-message"
import { fetchReports } from "@/lib/query/reports/fetchReports"
import type { ReportType } from "@/validators/types/reportType"
import { useQuery } from "@tanstack/react-query"

export default function Reports({
  params
}: Readonly<{
  params: { type: ReportType }
}>) {
  const { type } = params
  const { isPending, error, data } = useQuery({
    queryKey: ["reports", type],
    queryFn: () => fetchReports(type)
  })

  if (isPending) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
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
