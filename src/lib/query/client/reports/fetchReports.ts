import axiosClient from "@/lib/client"
import { ReportsValidationSchema } from "@/validators/schemas/reportSchema"
import type { ReportType } from "@/validators/types/reportType"

export const fetchReports = (type: ReportType) =>
  axiosClient
    .get(`/reports/${type}`)
    .then((res) => ReportsValidationSchema.parse(res.data))
    .catch((err: unknown) => {
      throw new Error(err as string)
    })
