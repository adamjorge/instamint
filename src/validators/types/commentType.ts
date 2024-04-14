import { CommentValidationSchema } from "@/validators/schemas/commentSchema"
import { z } from "zod"

export type Comment = z.infer<typeof CommentValidationSchema>
