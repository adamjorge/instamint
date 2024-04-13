import { PrismaClient } from "@prisma/client"

export async function createComments(prisma: PrismaClient) {
  const firstMinter = await prisma.minter.findFirstOrThrow({
    where: { isAdmin: false }
  })
  const secondMinterId = firstMinter.id + 1
  const thirdMinterId = secondMinterId + 1
  const fourthMinterId = thirdMinterId + 1
  const comments = [
    {
      content: "I really like this NFT",
      minterId: firstMinter.id,
      nftId: 1
    },
    {
      content: "I'm not a fan of this NFT",
      minterId: secondMinterId,
      nftId: 1
    },
    {
      content: "No, you're wrong. This NFT is amazing!",
      minterId: firstMinter.id,
      nftId: 1
    },
    {
      content: "I agree with you. This NFT is amazing!",
      minterId: thirdMinterId,
      nftId: 1
    },
    {
      content: "I'm not sure how I feel about this NFT",
      minterId: fourthMinterId,
      nftId: 1
    },
    {
      content: "This NFT speaks to my soul, it's like it was made for me",
      minterId: firstMinter.id,
      nftId: 1
    },
    {
      content: "I've seen a lot of NFTs, but this one stands out from the crowd",
      minterId: secondMinterId,
      nftId: 1
    }
  ]

  return prisma.comment.createMany({ data: comments })
}
