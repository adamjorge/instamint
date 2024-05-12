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
    searchWelcome: z.string(),
    nftPrice: z.string(),
    signOut: z.string(),
    moreDetails: z.string(),
    forYouFeed: z.string(),
    followedFeed: z.string()
  }),
  search: z.object({
    cancel: z.string(),
    minPrice: z.string(),
    maxPrice: z.string(),
    noSearchResultsFor: z.string(),
    search: z.string(),
    searchSentence: z.string(),
    searchPlaceholder: z.string(),
    submit: z.string()
  }),
  login: z.object({
    mail: z.string(),
    connectionInfo: z.string(),
    password: z.string(),
    submit: z.string(),
    login: z.string(),
    accountQuestion: z.string(),
    signUp: z.string(),
    rights: z.string()
  }),
  howToMenu: z.object({
    howTo: z.string(),
    changeProfile: z.string(),
    notifications: z.string()
  }),
  privacyMenu: z.object({
    whoCanSee: z.string(),
    privacy: z.string()
  }),
  applicationMenu: z.object({
    yourApplication: z.string(),
    language: z.string()
  }),
  profileChanges: z.object({
    changeProfile: z.string(),
    bio: z.string(),
    bioWIP: z.string(),
    deleteAccount: z.string(),
    deleteAccountConfirmation: z.string(),
    deleteAccountDescription: z.string()
  })
})
