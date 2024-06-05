import { z } from "zod"

export const SignUpSchema = z.object({
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
})
