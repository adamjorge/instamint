import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { metricsArray } from "@/constants/metrics"

export default function MetricsTable(props: MetricsTableProps) {
  const { daily, monthly, diff } = props

  return (
    <Table>
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
        {metricsArray.map((metric, index) => (
          <TableRow key={`${index.toString()}-${metric}`}>
            <TableCell className="font-semibold">{metric}</TableCell>
            <TableCell>{daily[index]}</TableCell>
            <TableCell>{monthly[index]}</TableCell>
            <TableCell>{diff[index]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

type MetricsTableProps = {
  daily: number[]
  monthly: number[]
  diff: number[]
}
