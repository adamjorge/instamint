import { ChangePasswordSchema } from "@/validators/schemas/translation/fragments/changePasswordSchema"
import { GlobalSchema } from "@/validators/schemas/translation/fragments/globalSchema"
import { LoginSchema } from "@/validators/schemas/translation/fragments/loginSchema"
import { notificationSchema } from "@/validators/schemas/translation/fragments/notificationSchema"
import { ProfileChangesSchema } from "@/validators/schemas/translation/fragments/profileChangesSchema"
import { ProfilePrivacyPolicySchema } from "@/validators/schemas/translation/fragments/profilePrivacyPolicySchema"
import { ResetPasswordSchema } from "@/validators/schemas/translation/fragments/resetPasswordSchema"
import { SearchSchema } from "@/validators/schemas/translation/fragments/searchSchema"
import { SignUpSchema } from "@/validators/schemas/translation/fragments/signUpSchema"
import { UpdatePasswordSchema } from "@/validators/schemas/translation/fragments/updatePasswordSchema"
import { z } from "zod"

export const MessageSchema = z.object({
  global: GlobalSchema,
  search: SearchSchema,
  login: LoginSchema,
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
  profileChanges: ProfileChangesSchema,
  profilePrivacyPolicy: ProfilePrivacyPolicySchema,
  signUp: SignUpSchema,
  resetPassword: ResetPasswordSchema,
  updatePassword: UpdatePasswordSchema,
  changePassword: ChangePasswordSchema,
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
  }),
  notifications: notificationSchema,
  notificationPreferences: z.object({
    notification: z.string(),
    changeSuccess: z.string(),
    changeError: z.string()
  })
})
