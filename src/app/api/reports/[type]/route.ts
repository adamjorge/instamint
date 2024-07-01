import { withErrorHandling } from "@/lib/helpers/apiWrapper"
import { getReports } from "@/lib/query/server/reports/getReports"
import { StatusCodes } from "http-status-codes"

export const GET = withErrorHandling(handleGet)

async function handleGet(req: Request, { params }: { params: { type: string } }) {
  const { type } = params

  if (type !== "minters" && type !== "comments" && type !== "teabags") {
    return Response.json(
      { message: `Invalid data type: ${type || "not provided"}` },
      { status: StatusCodes.BAD_REQUEST }
    )
  }

  const reports = await getReports(type)

  return Response.json(reports)
}
