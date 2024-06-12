import s3Client from "@/lib/s3"
import { PutObjectCommand } from "@aws-sdk/client-s3"

export async function uploadFileToS3(file: Buffer, fileName: string): Promise<string> {
  const bucketName = process.env.AWS_S3_BUCKET_NAME
  const region = process.env.AWS_S3_REGION

  if (!bucketName || !region) {
    throw new Error("S3 bucket name and region must be defined in environment variables.")
  }

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: file,
    ContentType: getFileContentType(fileName)
  }
  const command = new PutObjectCommand(params)
  await s3Client.send(command)

  return `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`
}

function getFileContentType(fileName: string): string {
  const extension = fileName.split(".").pop()?.toLowerCase() ?? ""

  switch (extension) {
    case "png":
      return "image/png"

    case "webp":
      return "image/webp"

    case "ogg":
      return "audio/ogg"

    case "flac":
      return "audio/flac"

    default:
      return "application/octet-stream"
  }
}
