import { CommentSchema } from "@/validators/schemas/commentSchema"
import { MinterSchema } from "@/validators/schemas/minterSchema"
import { TeaBagSchema } from "@/validators/schemas/teaBagSchema"
import { z } from "zod"

export const ReportSchema = z.object({
  id: z.number(),
  content: z.string(),
  createdAt: z.string(),
  commentId: z.number().nullable(),
  minterId: z.number().nullable(),
  teaBagId: z.number().nullable(),
  Comment: z.union([z.null(), z.undefined(), CommentSchema]),
  Minter: z.union([z.null(), z.undefined(), MinterSchema]),
  TeaBag: z.union([z.null(), z.undefined(), TeaBagSchema])
})

export const ReportsSchema = z.array(ReportSchema)
