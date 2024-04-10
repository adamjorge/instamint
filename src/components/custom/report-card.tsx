import CommentReportCard from "@/components/custom/reports/comment-report-card"
import MinterReportCard from "@/components/custom/reports/minter-report-card"
import { ReportSchema } from "@/validators/schemas/reportSchema"
import type { Report } from "@/validators/types/report"
import { z } from "zod"
import TeaBagReportCard from "./reports/teabag-report-card"

export default function ReportCard({
  report,
  type
}: {
  report: z.infer<typeof ReportSchema>
  type: Report
}) {
  const reportObject = ReportSchema.parse(report)

  switch (type) {
    case "minters":
      return <MinterReportCard report={reportObject} />

    case "comments":
      return <CommentReportCard report={reportObject} />

    case "teabags":
      return <TeaBagReportCard report={reportObject} />
  }
}
