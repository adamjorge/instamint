import { updatePassword } from "@/lib/query/server/users/updatePassword"
import type {
  UpdatePasswordFormData,
  UpdatePasswordFormState
} from "@/validators/schemas/update-password/passwordSchema"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function POST(req: Request) {
  try {
    const { token, formData } = (await req.json()) as RequestBody
    const response: UpdatePasswordFormState = await updatePassword(token, formData)

    if (Object.keys(response.errors).length > 0) {
      return Response.json(response, { status: StatusCodes.BAD_REQUEST })
    }

    return Response.json({ message: "Password updated successfully" }, { status: StatusCodes.OK })
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}

type RequestBody = {
  token: string
  formData: UpdatePasswordFormData
}
