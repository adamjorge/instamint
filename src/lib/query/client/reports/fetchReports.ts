import axiosClient from "@/lib/client"
import { ReportsValidationSchema } from "@/validators/schemas/reportSchema"
import type { ReportType } from "@/validators/types/reportType"

export async function fetchReports(type: ReportType) {
  const response = await axiosClient.get(`/reports/${type}`)

  return ReportsValidationSchema.parse(response.data)
}
