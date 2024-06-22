import { MAX_FILE_SIZE } from "@/constants/maxFileSize"
import { uploadFileToS3 } from "@/lib/aws/upload-original-content/uploadFileToS3"
import prisma from "@/lib/db"
import { saveOriginalContent } from "@/lib/query/server/minters/saveContent"
import { ReasonPhrases, StatusCodes } from "http-status-codes"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get("file") as File
    const encodedFileName = encodeURI(file.name)
    const minterId = formData.get("minterId") as string

    if (file.size === 0) {
      return Response.json({ error: "File is required." }, { status: StatusCodes.BAD_REQUEST })
    }

    if (file.size > MAX_FILE_SIZE) {
      return Response.json(
        { error: "File size must be between 0B and 1GB." },
        { status: StatusCodes.BAD_REQUEST }
      )
    }

    const existingContent = await prisma.originalContent.findUnique({
      where: { imageUrl: encodedFileName }
    })

    if (existingContent) {
      return Response.json({ error: "File already uploaded." }, { status: StatusCodes.CONFLICT })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const fileUrl = await uploadFileToS3(buffer, encodedFileName)

    await saveOriginalContent(fileUrl, parseInt(minterId, 10))

    return Response.json(
      { message: "File uploaded successfully", fileUrl },
      { status: StatusCodes.OK }
    )
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    )
  }
}
