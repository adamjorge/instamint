import { z } from "zod"

export const UploadOrginalContentTerms = z.object({
  title: z.string(),
  firstParagraph: z.string(),
  secondParagraph: z.string(),
  contactInfo: z.string()
})
