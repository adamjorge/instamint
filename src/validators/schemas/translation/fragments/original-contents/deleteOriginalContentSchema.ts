import { z } from "zod"

export const DeleteOriginalContentSchema = z.object({
  Title: z.string(),
  errorFetchOc: z.string(),
  noContentTitle: z.string(),
  imageCreatedTitle: z.string(),
  successDeleteMessage: z.string(),
  failedDeleteMessage: z.string(),
  deleteButtonText: z.string(),
  inProcessdeleteButtonText: z.string()
})
