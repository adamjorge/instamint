import { ReportsValidationSchema } from "@/validators/schemas/reportSchema"
import type { ReportType } from "@/validators/types/reportType"
import axios from "axios"

export const fetchReports = (type: ReportType) =>
  axios
    .get(`/api/reports/${type}`)
    .then((res) => ReportsValidationSchema.parse(res.data))
    .catch((err: unknown) => {
      throw new Error(err as string)
    })
