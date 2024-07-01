import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { calculateMetric } from "@/lib/utils/metrics/calculateMetric"
import { isValidMetric } from "@/lib/utils/metrics/isValidMetric"
import type { TimePeriod } from "@/validators/types/timePeriod"
import { StatusCodes } from "http-status-codes"

export const GET = withErrorHandling(handleGet)

async function handleGet(req: Request) {
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

  const data = await calculateMetric(period, metric)

  return Response.json(data)
}
