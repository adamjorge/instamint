import * as z from "zod"

export const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  name: z.string().min(6, { message: "Name must be at least 6 characters" })
})
