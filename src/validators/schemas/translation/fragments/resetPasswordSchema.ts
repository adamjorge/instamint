import { z } from "zod"

export const ResetPasswordSchema = z.object({
  mail: z.string(),
  emailPlaceholder: z.string(),
  connectionInfo: z.string(),
  resetButton: z.string(),
  successEmailMessage: z.string(),
  emailNotExistMessage: z.string(),
  resetPasswordTitle: z.string(),
  resetMainTitle: z.string(),
  resetPasswordInstruction: z.string()
})
