import { z } from "zod"

export const ShareSpecificNftLinkSchema = z.object({
  successUrlLink: z.string(),
  errorCopyMessage: z.string()
})
