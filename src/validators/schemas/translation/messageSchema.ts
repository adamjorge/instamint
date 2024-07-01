import { ApplicationMenuSchema } from "@/validators/schemas/translation/fragments/applicationMenuSchema"
import { ChangePasswordSchema } from "@/validators/schemas/translation/fragments/changePasswordSchema"
import { DeleteOriginalContentSchema } from "@/validators/schemas/translation/fragments/deleteOriginalContentSchema"
import { GlobalSchema } from "@/validators/schemas/translation/fragments/globalSchema"
import { HowToMenuSchema } from "@/validators/schemas/translation/fragments/howToMenuSchema"
import { LikeSchema } from "@/validators/schemas/translation/fragments/likeSchema"
import { LoginSchema } from "@/validators/schemas/translation/fragments/loginSchema"
import { NotificationPreferencesSchema } from "@/validators/schemas/translation/fragments/notificationPreferencesSchema"
import { NotificationSchema } from "@/validators/schemas/translation/fragments/notificationSchema"
import { PrivacyMenuSchema } from "@/validators/schemas/translation/fragments/privacyMenuSchema"
import { PrivacySchema } from "@/validators/schemas/translation/fragments/privacySchema"
import { ProfileChangesSchema } from "@/validators/schemas/translation/fragments/profileChangesSchema"
import { ProfilePrivacyPolicySchema } from "@/validators/schemas/translation/fragments/profilePrivacyPolicySchema"
import { ResetPasswordSchema } from "@/validators/schemas/translation/fragments/resetPasswordSchema"
import { SearchSchema } from "@/validators/schemas/translation/fragments/searchSchema"
import { ShareSpecificNftLinkSchema } from "@/validators/schemas/translation/fragments/shareSpecificNftLinkSchema"
import { SignUpSchema } from "@/validators/schemas/translation/fragments/signUpSchema"
import { UpdatePasswordSchema } from "@/validators/schemas/translation/fragments/updatePasswordSchema"
import { UploadOriginalContentSchema } from "@/validators/schemas/translation/fragments/uploadOriginalContent"
import { UploadOrginalContentTerms } from "@/validators/schemas/translation/fragments/uploadOriginalContentTerms"
import { z } from "zod"

export const MessageSchema = z.object({
  global: GlobalSchema,
  search: SearchSchema,
  login: LoginSchema,
  howToMenu: HowToMenuSchema,
  privacyMenu: PrivacyMenuSchema,
  applicationMenu: ApplicationMenuSchema,
  privacy: PrivacySchema,
  profileChanges: ProfileChangesSchema,
  profilePrivacyPolicy: ProfilePrivacyPolicySchema,
  signUp: SignUpSchema,
  resetPassword: ResetPasswordSchema,
  updatePassword: UpdatePasswordSchema,
  changePassword: ChangePasswordSchema,
  uploadOriginalContent: UploadOriginalContentSchema,
  uploadOriginalContentTerms: UploadOrginalContentTerms,
  deleteOriginalContent: DeleteOriginalContentSchema,
  like: LikeSchema,
  notifications: NotificationSchema,
  notificationPreferences: NotificationPreferencesSchema,
  shareNftLink: ShareSpecificNftLinkSchema
})
