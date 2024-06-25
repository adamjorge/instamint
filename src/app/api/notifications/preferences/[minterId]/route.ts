import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { changePreference } from "@/lib/query/server/notifications/changePreference"
import { getMinterPreferences } from "@/lib/query/server/notifications/getMinterPreferences"
import type { NotificationTypeEnum } from "@prisma/client"
import { ReasonPhrases } from "http-status-codes"

export const GET = withErrorHandling(handleGet)

export const PUT = withErrorHandling(handlePut)

async function handleGet(req: Request, { params }: { params: { minterId: string } }) {
  const { minterId } = params
  const minterPreferences = await getMinterPreferences(minterId)

  return Response.json(minterPreferences)
}

async function handlePut(req: Request, { params }: { params: { minterId: string } }) {
  const { minterId } = params
  const { type } = (await req.json()) as PutPayload
  const changedPreference = await changePreference(minterId, type)

  return Response.json({ message: ReasonPhrases.OK, changedPreference })
}

type PutPayload = {
  type: NotificationTypeEnum
}
