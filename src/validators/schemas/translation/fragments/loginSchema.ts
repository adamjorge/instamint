import { z } from "zod"

export const LoginSchema = z.object({
  mail: z.string(),
  connectionInfo: z.string(),
  password: z.string(),
  submit: z.string(),
  login: z.string(),
  accountQuestion: z.string(),
  forgetPassword: z.string(),
  signUp: z.string(),
  rights: z.string()
})
