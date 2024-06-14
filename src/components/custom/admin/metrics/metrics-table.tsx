import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

export default function MetricsTable() {
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
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold">Comments by NFTs</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
