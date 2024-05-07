import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { ReportValidationSchema } from "@/validators/schemas/reportSchema"
import type { ReportType } from "@/validators/types/reportType"
import { useCallback, useMemo } from "react"
import { toast } from "sonner"
import { z } from "zod"

export default function ReportCard({
  report,
  type
}: {
  report: z.infer<typeof ReportValidationSchema>
  type: ReportType
}) {
  const title = useMemo(() => type.charAt(0).toUpperCase() + type.slice(1, -1), [type])
  const handleCheckClick = useCallback(() => {
    toast.error("This feature is a work in progress")
  }, [])

  return (
    <Card key={report.id} className="mt-5">
      <CardHeader>
        <CardTitle>Report ID: {report.id}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{report.content}</CardDescription>
      </CardContent>
      <CardFooter>
        <CardContent className="w-full">
          <p>
            {title} report created at: {report.createdAt.substring(0, 10)}
          </p>
          <Button variant="outline" className="mt-2 w-full" onClick={handleCheckClick}>
            Check {type.slice(0, -1)}
          </Button>
        </CardContent>
      </CardFooter>
    </Card>
  )
}
