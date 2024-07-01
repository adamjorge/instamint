import prisma from "@/lib/db"

export async function getOriginalContentsByMinterId(minterId: string) {
  const parsedMinterId = parseInt(minterId, 10)

  return await prisma.originalContent.findMany({
    where: {
      minterId: parsedMinterId
    }
  })
}
