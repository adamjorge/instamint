import { StatusCodes } from "http-status-codes"

function isNonEmptyString(value: string | null): value is string {
  return value !== null && value !== ""
}

export function checkSearchParams(params: SearchParams) {
  const { type, search, userId } = params

  if (!["minters", "nfts", "teabags"].includes(type)) {
    return { status: StatusCodes.BAD_REQUEST, errorMessage: "Invalid type" }
  }

  if (!isNonEmptyString(search)) {
    return { status: StatusCodes.BAD_REQUEST, errorMessage: "Missing search parameter" }
  }

  if (!userId && type === "minters") {
    return { status: StatusCodes.BAD_REQUEST, errorMessage: "Missing currentUserId parameter" }
  }

  return { status: StatusCodes.OK }
}

type SearchParams = {
  type: string
  search: string | null
  userId: string | null
}
