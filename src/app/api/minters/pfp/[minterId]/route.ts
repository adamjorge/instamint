import { getImage } from "@/lib/aws/getImage"
import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { getAvatarKey } from "@/lib/query/server/minters/getAvatarKey"

export const GET = withErrorHandling(handleGet)

async function handleGet(req: Request, { params }: { params: { minterId: string } }) {
  const { minterId } = params
  const avatarKey = await getAvatarKey(minterId)

  if (!avatarKey) {
    throw new Error("Avatar key not found")
  }

  const signedUrl = await getImage(avatarKey)

  return Response.json({ signedUrl })
}
