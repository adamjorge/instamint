import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

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
        <TableRow>
          <TableCell className="font-semibold">Active minters</TableCell>
          <TableCell>{daily[0]}</TableCell>
          <TableCell>{monthly[0]}</TableCell>
          <TableCell>{diff[0]}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold">Comments by NFTs</TableCell>
          <TableCell>{daily[1]}</TableCell>
          <TableCell>{monthly[1]}</TableCell>
          <TableCell>{diff[1]}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

type MetricsTableProps = {
  daily: number[]
  monthly: number[]
  diff: number[]
}
