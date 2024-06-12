import prisma from "@/lib/db"

export default async function likeNft(nftId: number, minterId: number) {
  await prisma.nft.update({
    data: {
      likedBy: {
        connect: {
          id: minterId
        }
      }
    },
    where: {
      id: nftId
    }
  })

  return { isLiked: true }
}
