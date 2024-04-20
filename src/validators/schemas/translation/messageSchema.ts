import { z } from "zod"

export const MessageSchema = z.object({
  global: z.object({
    check: z.string(),
    loading: z.string(),
    noResults: z.string(),
    resultsFor: z.string(),
    noResultsFor: z.string(),
    noResultsSentence: z.string(),
    error: z.string(),
    searchWelcome: z.string()
  }),
  search: z.object({
    search: z.string(),
    searchSentence: z.string(),
    searchPlaceholder: z.string(),
    noSearchResultsFor: z.string(),
    submit: z.string(),
    cancel: z.string()
  })
})
