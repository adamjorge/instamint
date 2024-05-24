import s3Client from "@/lib/s3"
import { GetObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

async function createPresignedUrl(fileName: string) {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName
  }
  const command = new GetObjectCommand(params)
  const signedUrl = await getSignedUrl(s3Client, command, {
    expiresIn: 3600
  })

  return signedUrl
}

export async function getImage(fileName: string) {
  const imageSignedUrl = await createPresignedUrl(fileName)

  return imageSignedUrl
}
