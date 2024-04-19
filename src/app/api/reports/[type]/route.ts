import { getReports } from "@/lib/query/reports/getReports"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function GET(req: Request, { params }: { params: { type: string } }) {
  const { type } = params

  if (type !== "minters" && type !== "comments" && type !== "teabags") {
    return Response.json(
      { message: `Invalid data type: ${type || "not provided"}` },
      { status: StatusCodes.BAD_REQUEST }
    )
  }

  try {
    const reports = await getReports(type)

    return Response.json(reports)
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
