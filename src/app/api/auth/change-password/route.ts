import { changePassword, changePasswordQuery, isLegit } from "@/lib/query/users/changePassword"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function POST(req: Request) {
  const { email, locale } = (await req.json()) as PostPayload

  if (!email || !locale) {
    return Response.json(
      { message: `Missing ${email ? "locale" : "email"}` },
      { status: StatusCodes.BAD_REQUEST }
    )
  }

  try {
    await changePasswordQuery(email, locale)

    return Response.json({ message: "Reset password email sent" }, { status: StatusCodes.CREATED })
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}

export async function PATCH(req: Request) {
  const { token, currentPassword, newPassword } = (await req.json()) as PutPayload

  if (!token || !currentPassword || !newPassword) {
    return Response.json(
      {
        message: "Missing at least one body parameter"
      },
      { status: StatusCodes.BAD_REQUEST }
    )
  }

  try {
    const userId = await isLegit(token, currentPassword)

    await changePassword(userId, newPassword)

    return Response.json({ message: "Password changed" }, { status: StatusCodes.OK })
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}

type PostPayload = {
  email: string
  locale: string
}

type PutPayload = {
  token: string
  currentPassword: string
  newPassword: string
}
