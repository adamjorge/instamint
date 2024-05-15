import { resetPasswordQuery } from "@/lib/query/users/resetPassword"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function POST(req: Request) {
  const { email, locale } = (await req.json()) as Payload

  if (!email) {
    return Response.json({ message: "Missing email" }, { status: StatusCodes.BAD_REQUEST })
  }

  try {
    await resetPasswordQuery(email, locale)

    return Response.json({ message: "Reset password email sent" }, { status: StatusCodes.CREATED })
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}

type Payload = {
  email: string
  locale: string
}
