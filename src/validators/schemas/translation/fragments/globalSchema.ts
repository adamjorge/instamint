import { z } from "zod"

export const GlobalSchema = z.object({
  check: z.string(),
  loading: z.string(),
  noResults: z.string(),
  resultsFor: z.string(),
  noResultsFor: z.string(),
  noResultsSentence: z.string(),
  error: z.string(),
  searchWelcome: z.string(),
  nftPrice: z.string(),
  signOut: z.string(),
  moreDetails: z.string(),
  forYouFeed: z.string(),
  followedFeed: z.string(),
  invalidCredentials: z.string(),
  deletedAccount: z.string(),
  appDescription: z.string(),
  greeting: z.string(),
  changePasswordMail: z.string(),
  successChangePassword: z.string(),
  successFileUpload: z.string(),
  failedFileUpload: z.string(),
  errorFileUpload: z.string(),
  userNotActivated: z.string()
})
