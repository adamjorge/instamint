import { countNfts } from "@/lib/query/metrics/countNfts"
import type { TimePeriod } from "@/validators/types/timePeriod"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const period = searchParams.get("period") as TimePeriod

  if (!period) {
    return Response.json({ message: "Invalid metric type" }, { status: StatusCodes.BAD_REQUEST })
  }

  try {
    const data = await countNfts(period)

    return Response.json(data)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
