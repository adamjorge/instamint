"use client"

import Spinner from "@/components/custom/spinner"
import ErrorMessage from "@/components/ui/custom/error-message"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { fetchMetrics } from "@/lib/query/metrics/fetchMetrics"
import { useQuery } from "@tanstack/react-query"

export default function MetricsTable() {
  const { data, error, isPending } = useQuery({
    queryKey: ["metrics"],
    queryFn: fetchMetrics,
    retry: 0
  })

  if (isPending) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  return (
    <Table className="self-center">
      <TableCaption>Main metrics from Instamint</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Metric (counts)</TableHead>
          <TableHead>Daily</TableHead>
          <TableHead>Monthly</TableHead>
          <TableHead>Diff (last month &lt;&gt; this month)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-semibold">Active minters</TableCell>
          <TableCell>{data.daily[0]}</TableCell>
          <TableCell>{data.monthly[0]}</TableCell>
          <TableCell>{data.diff[0]}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold">Comments by NFTs</TableCell>
          <TableCell>{data.daily[1]}</TableCell>
          <TableCell>{data.monthly[0]}</TableCell>
          <TableCell>{data.diff[0]}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
