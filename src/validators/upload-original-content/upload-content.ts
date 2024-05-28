import { z } from "zod"

export const formSchema = z.object({
  file: z
    .instanceof(File)
    .refine(
      (file) => file.size > 0 && file.size <= 1 * 1024 * 1024 * 1024,
      "File size must be between 0B and 1GB"
    )
    .refine(
      (file) => ["image/png", "image/webp", "audio/ogg", "audio/flac"].includes(file.type),
      "Invalid file type"
    ),
  agreeToTerms: z.boolean().refine((val) => val, "You must agree to the terms")
})
