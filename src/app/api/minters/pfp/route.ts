import { uploadFileToS3 } from "@/lib/aws/uploadFileToS3"
import { updateAvatarUrl } from "@/lib/query/server/minters/updateAvatarUrl"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function POST(req: Request) {
  if (!process.env.AWS_S3_BUCKET_URL) {
    return Response.json({
      error: "AWS S3 bucket URL is missing.",
      status: StatusCodes.BAD_REQUEST
    })
  }

  try {
    const formData = await req.formData()
    const minterId = formData.get("minterId") as string
    const file = formData.get("file") as File
    const encodedFileName = crypto.randomUUID()

    if (file.size === 0) {
      return Response.json({ error: "File is required." }, { status: StatusCodes.BAD_REQUEST })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    await uploadFileToS3(buffer, encodedFileName)

    const avatarKey = encodedFileName

    await updateAvatarUrl(minterId, avatarKey)

    return Response.json({ uploadedFile: encodedFileName })
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
