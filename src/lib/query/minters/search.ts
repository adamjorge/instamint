import prisma from "@/lib/db"

export async function searchMinters(search: string, currentUserId: string) {
  const currentUserIdNumber = parseInt(currentUserId, 10)
  const followedIds = (
    await prisma.follow.findMany({
      select: {
        followingId: true
      },
      where: {
        followerId: currentUserIdNumber
      }
    })
  ).map(({ followingId }) => followingId)
  const searchedMinters = await prisma.minter.findMany({
    select: {
      id: true,
      username: true,
      profileUrl: true,
      avatarUrl: true,
      bio: true,
      location: true
    },
    where: {
      OR: [
        {
          username: { contains: search, mode: "insensitive" }
        },
        {
          location: {
            contains: search,
            mode: "insensitive"
          }
        }
      ]
    }
  })

  return searchedMinters.map((minter) => ({
    ...minter,
    isFollowed: followedIds.includes(minter.id)
  }))
}
