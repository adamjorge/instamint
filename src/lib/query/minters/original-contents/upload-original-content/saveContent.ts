import prisma from "@/lib/db"

export async function saveOriginalContent(encodedFileName: string, minterId: number) {
  return await prisma.originalContent.create({
    data: {
      imageUrl: encodedFileName,
      minterId
    }
  })
}
