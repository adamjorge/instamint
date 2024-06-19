import { calculateMetric } from "@/lib/utils/metrics/calculateMetric"
import { isValidMetric } from "@/lib/utils/metrics/isValidMetric"
import type { TimePeriod } from "@/validators/types/timePeriod"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const period = searchParams.get("period") as TimePeriod
  const metric = searchParams.get("metric")

  if (!metric) {
    return Response.json({ message: "Missing metric" }, { status: StatusCodes.BAD_REQUEST })
  }

  const isValid = isValidMetric(metric)

  if (!isValid) {
    return Response.json({ message: "Invalid metric" }, { status: StatusCodes.BAD_REQUEST })
  }

  try {
    const data = await calculateMetric(period, metric)

    return Response.json(data)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
