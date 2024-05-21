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
    followedFeed: z.string(),
    invalidCredentials: z.string(),
    deletedAccount: z.string(),
    appDescription: z.string(),
    greeting: z.string()
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
    forgetPassword: z.string(),
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
  }),
  signUp: z.object({
    emailLabel: z.string(),
    passwordLabel: z.string(),
    password: z.string(),
    nameLabel: z.string(),
    emailFieldPlaceholder: z.string(),
    passwordFieldPlaceholder: z.string(),
    nameFieldPlaceholder: z.string(),
    signUpButton: z.string(),
    loginButton: z.string(),
    loginQuestion: z.string(),
    invalidEmail: z.string(),
    minimumEmailError: z.string(),
    minimumPasswordError: z.string(),
    minimumnameError: z.string(),
    backToLoginButton: z.string(),
    emailVerificationText: z.string(),
    conformEmailInstruction: z.string(),
    signupSubjectTitle: z.string(),
    signupVerifyTitle: z.string(),
    signupInstruction: z.string(),
    successVerification: z.string()
  }),
  resetPassword: z.object({
    mail: z.string(),
    emailPlaceholder: z.string(),
    connectionInfo: z.string(),
    resetButton: z.string(),
    successEmailMessage: z.string(),
    emailNotExistMessage: z.string(),
    resetPasswordTitle: z.string(),
    resetMainTitle: z.string(),
    resetPasswordInstruction: z.string()
  }),
  updatePassword: z.object({
    newPasswordLabel: z.string(),
    newPasswordPlaceholder: z.string(),
    confirmPasswordLabel: z.string(),
    confirmPasswordPlaceholder: z.string(),
    passwordNotMatch: z.string(),
    updateButton: z.string(),
    successMessage: z.string()
  })
})
