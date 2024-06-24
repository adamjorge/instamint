import { z } from "zod"

export const UploadOriginalContentSchema = z.object({
  uploadLabel: z.string(),
  agreeText: z.string(),
  termsLink: z.string(),
  uploadContentButton: z.string()
})
