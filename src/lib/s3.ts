import { S3Client } from "@aws-sdk/client-s3"

if (
  !process.env.AWS_S3_REGION ||
  !process.env.AWS_S3_ACCESS_KEY_ID ||
  !process.env.AWS_S3_SECRET_ACCESS_KEY
) {
  throw new Error("AWS S3 credentials are missing")
}

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY
  }
})

export default s3Client
