import { changePreference } from "@/lib/query/notification/changePreference"
import { getMinterPreferences } from "@/lib/query/notification/getMinterPreferences"
import type { NotificationTypeEnum } from "@prisma/client"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request, { params }: { params: { minterId: string } }) {
  try {
    const { minterId } = params
    const minterPreferences = await getMinterPreferences(minterId)

    return Response.json(minterPreferences)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}

export async function PUT(req: Request, { params }: { params: { minterId: string } }) {
  try {
    const { minterId } = params
    const { type } = (await req.json()) as PutPayload
    const changedPreference = await changePreference(minterId, type)

    return Response.json({ message: ReasonPhrases.OK, changedPreference })
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}

type PutPayload = {
  type: NotificationTypeEnum
}
