import s3Client from "@/lib/s3"
import { PutObjectCommand } from "@aws-sdk/client-s3"

export async function uploadFileToS3(file: Buffer, fileName: string) {
  const fileBuffer = file
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName,
    Body: fileBuffer,
    ContentType: "image/jpg"
  }
  const command = new PutObjectCommand(params)
  await s3Client.send(command)

  return fileName
}
