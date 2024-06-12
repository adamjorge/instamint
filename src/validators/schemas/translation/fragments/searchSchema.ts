import { z } from "zod"

export const SearchSchema = z.object({
  cancel: z.string(),
  minPrice: z.string(),
  maxPrice: z.string(),
  noSearchResultsFor: z.string(),
  search: z.string(),
  searchSentence: z.string(),
  searchPlaceholder: z.string(),
  submit: z.string()
})
