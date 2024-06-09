import { countMints } from "@/lib/query/metrics/countMints"
import { isValidMetric } from "@/lib/utils/metrics/isValidMetric"
import type { TimePeriod } from "@/validators/types/timePeriod"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const period = searchParams.get("period") as TimePeriod
  const metric = searchParams.get("metric")

  if (!period) {
    return Response.json({ message: "Invalid period" }, { status: StatusCodes.BAD_REQUEST })
  }

  if (!metric) {
    return Response.json({ message: "Missing metric" }, { status: StatusCodes.BAD_REQUEST })
  }

  const isValid = isValidMetric(metric)

  if (!isValid) {
    return Response.json({ message: "Invalid metric" }, { status: StatusCodes.BAD_REQUEST })
  }

  try {
    const data = await countMints(period)

    return Response.json(data)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
