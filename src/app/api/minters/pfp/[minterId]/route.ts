import { getImage } from "@/lib/aws/getImage"
import { getAvatarKey } from "@/lib/query/minters/getAvatarKey"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request, { params }: { params: { minterId: string } }) {
  const { minterId } = params

  try {
    const avatarKey = await getAvatarKey(minterId)

    if (!avatarKey) {
      throw new Error("Avatar key not found")
    }

    const signedUrl = await getImage(avatarKey)

    return Response.json({ signedUrl })
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
