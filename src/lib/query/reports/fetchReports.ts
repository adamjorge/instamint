import { ReportsValidationSchema } from "@/validators/schemas/reportSchema"
import type { ReportType } from "@/validators/types/reportType"
import axios, { isAxiosError } from "axios"

export const fetchReports = (type: ReportType) =>
  axios
    .get(`/api/reports/${type}`)
    .then((res) => ReportsValidationSchema.parse(res.data))
    .catch((err: unknown) => {
      if (isAxiosError(err)) {
        throw new Error(err.message)
      }

      throw new Error(err as string)
    })
