import prisma from "@/lib/db"
import { CreateNftCommentType } from "@/validators/schemas/nfts/comments/create/createCommentSchema"

export default async function createNftComment(authorId: number, data: CreateNftCommentType) {
  const { content, nftId, parentId } = data

  if (parentId) {
    return await createNftChildComment(authorId, data)
  }

  const comment = await prisma.comment.create({
    data: {
      content,
      authorId,
      nftId
    }
  })

  return comment
}

async function createNftChildComment(authorId: number, data: CreateNftCommentType) {
  const { content, nftId, parentId } = data

  if (!parentId) {
    throw new Error("Parent ID is required")
  }

  const comment = await prisma.comment.create({
    data: {
      content,
      authorId,
      nftId,
      parentId
    }
  })

  return comment
}
