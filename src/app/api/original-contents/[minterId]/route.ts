import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { getOriginalContentsByMinterId } from "@/lib/query/server/minters/getOriginalContentsByMinterId"

export const GET = withErrorHandling(handleGet)

async function handleGet(req: Request, { params }: { params: { minterId: string } }) {
  const { minterId } = params
  const originalContents = await getOriginalContentsByMinterId(minterId)

  return Response.json(originalContents)
}
