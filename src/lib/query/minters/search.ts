import prisma from "@/lib/db"

export async function searchMinters(search: string) {
  return await prisma.minter.findMany({
    select: {
      id: true,
      username: true,
      profileUrl: true,
      avatarUrl: true,
      bio: true
    },
    where: {
      isAdmin: false,
      username: {
        contains: search,
        mode: "insensitive"
      }
    }
  })
}
