import * as z from "zod"

type TranslationFunction = (key: string) => string

export const formSchema = (t: TranslationFunction) =>
  z.object({
    email: z
      .string()
      .email({ message: t("invalidEmail") })
      .min(3, { message: t("minimumEmailError") }),
    password: z.string().min(6, { message: t("minimumPasswordError") }),
    name: z.string().min(6, { message: t("minimumNameError") })
  })
