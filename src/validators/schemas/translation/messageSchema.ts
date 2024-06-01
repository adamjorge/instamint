import { ProfilePrivacyPolicySchema } from "@/validators/schemas/translation/fragments/profilePrivacyPolicySchema"
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
    greeting: z.string(),
    changePasswordMail: z.string(),
    successChangePassword: z.string(),
    successFileUpload: z.string(),
    failedFileUpload: z.string(),
    errorFileUpload: z.string()
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
    language: z.string(),
    privacyPolicy: z.string()
  }),
  privacy: z.object({
    authorizeSearchByEmail: z.string()
  }),
  profileChanges: z.object({
    error: z.string(),
    changeMyPassword: z.string(),
    changeProfile: z.string(),
    bio: z.string(),
    bioWIP: z.string(),
    deleteAccount: z.string(),
    deleteAccountConfirmation: z.string(),
    deleteAccountDescription: z.string(),
    profilePicture: z.string(),
    uploadProfilePicture: z.string(),
    uploadError: z.string(),
    uploadSuccess: z.string()
  }),
  profilePrivacyPolicy: ProfilePrivacyPolicySchema,
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
    successMessage: z.string(),
    deleteAccountDescription: z.string(),
    changeMyPassword: z.string()
  }),
  changePassword: z.object({
    changePasswordTitle: z.string(),
    changePassword: z.string(),
    changeMyPassword: z.string(),
    currentPassword: z.string(),
    currentPasswordDescription: z.string(),
    newPassword: z.string(),
    confirmPassword: z.string(),
    backToHome: z.string(),
    appDescription: z.string(),
    changePasswordInstructions: z.string()
  }),
  uploadOriginalContent: z.object({
    uploadLabel: z.string(),
    agreeText: z.string(),
    termsLink: z.string(),
    uploadContentButton: z.string()
  }),
  uploadOriginalContentTerms: z.object({
    title: z.string(),
    firstParagraph: z.string(),
    secondParagraph: z.string(),
    contactInfo: z.string()
  }),
  like: z.object({
    likeError: z.string(),
    dislikeError: z.string()
  })
})
