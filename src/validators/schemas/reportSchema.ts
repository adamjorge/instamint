import { z } from "zod"

export const ReportValidationSchema = z.object({
  id: z.number(),
  content: z.string(),
  createdAt: z.string(),
  commentId: z.number().nullable(),
  minterId: z.number().nullable(),
  teaBagId: z.number().nullable()
})

export type Report = z.infer<typeof ReportValidationSchema>

export const ReportsValidationSchema = z.array(ReportValidationSchema)
