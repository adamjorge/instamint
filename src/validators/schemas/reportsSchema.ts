import { MinterSchema } from "@/validators/schemas/minterSchema"
import { z } from "zod"

export const ReportsSchema = z.array(MinterSchema)
