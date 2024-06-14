import s3Client from "@/lib/s3"
import { GetObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

export async function createPresignedUrl(fileName: string): Promise<string> {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName
  }
  const command = new GetObjectCommand(params)
  const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 604800 })

  return signedUrl
}
