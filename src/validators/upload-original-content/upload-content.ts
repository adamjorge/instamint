import { ALLOWED_FILE_TYPES } from "@/constants/allowedFileTypes"
import { MAX_FILE_SIZE } from "@/constants/maxFileSize"
import { z } from "zod"

export const formSchema = z.object({
  file: z
    .instanceof(File)
    .refine(
      (file) => file.size > 0 && file.size <= MAX_FILE_SIZE,
      "File size must be between 0B and 1GB"
    )
    .refine((file) => ALLOWED_FILE_TYPES.includes(file.type), "Invalid file type"),
  agreeToTerms: z.boolean().refine((val) => val, "You must agree to the terms")
})
