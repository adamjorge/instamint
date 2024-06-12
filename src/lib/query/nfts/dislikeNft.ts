import prisma from "@/lib/db"

export default async function dislikeNft(nftId: number, minterId: number) {
  await prisma.nft.update({
    data: {
      likedBy: {
        disconnect: {
          id: minterId
        }
      }
    },
    where: {
      id: nftId
    }
  })

  return { isLiked: false }
}
