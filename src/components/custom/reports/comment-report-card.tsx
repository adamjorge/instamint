import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { ReportSchema } from "@/validators/schemas/reportSchema"
import { z } from "zod"

export default function CommentReportCard({ report }: { report: z.infer<typeof ReportSchema> }) {
  return (
    <Card key={report.id} className="mt-3">
      <CardHeader>
        <CardTitle>Report ID : {report.id}</CardTitle>
        <CardTitle>Comment ID : {report.commentId}</CardTitle>
        <CardTitle>Comment content : {report.Comment?.content}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{report.content}</CardDescription>
      </CardContent>
      <CardFooter>
        <p>Created at : {report.createdAt.substring(0, 10)}</p>
      </CardFooter>
    </Card>
  )
}
