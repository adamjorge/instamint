import { z } from "zod"

export const MessageSchema = z.object({
  search: z.object({
    search: z.string(),
    searchWelcome: z.string(),
    searchSentence: z.string(),
    searchPlaceholder: z.string(),
    submit: z.string(),
    cancel: z.string()
  }),
  check: z.string(),
  loading: z.string(),
  noResults: z.string(),
  noResultsSentence: z.string()
})
