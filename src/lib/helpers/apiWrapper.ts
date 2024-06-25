import { ReasonPhrases, StatusCodes } from "http-status-codes"

export function withErrorHandling<T>(handler: Handler<T>) {
  return async (req: Request, params: T) => {
    try {
      return await handler(req, params)
    } catch (error) {
      return Response.json(
        { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
        { status: StatusCodes.INTERNAL_SERVER_ERROR }
      )
    }
  }
}

type Handler<T> = (req: Request, params: T) => Promise<Response>
