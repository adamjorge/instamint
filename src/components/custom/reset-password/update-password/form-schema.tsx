import { z } from "zod"

export const formSchema = z.object({
  newPassword: z.string().min(6, { message: "New password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Password doesn't match" })
})
