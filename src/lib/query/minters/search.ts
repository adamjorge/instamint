import prisma from "@/lib/db"
import { Prisma } from "@prisma/client"

const select: Prisma.MinterSelect = {
  id: true,
  username: true,
  profileUrl: true,
  avatarKey: true,
  bio: true,
  location: true,
  isSearchableByEmail: true,
  users: {
    select: {
      email: true
    }
  }
}

export async function searchMinters(search: string, currentUserId: string) {
  const currentUserIdNumber = parseInt(currentUserId, 10)
  const followedIds = (
    await prisma.follow.findMany({
      select: { followingId: true },
      where: { followerId: currentUserIdNumber }
    })
  ).map(({ followingId }) => followingId)
  const searchedMinters = await prisma.minter.findMany({
    select,
    where: {
      OR: [
        {
          username: { contains: search, mode: "insensitive" }
        },
        {
          location: { contains: search, mode: "insensitive" }
        },
        {
          users: {
            some: {
              email: {
                contains: search,
                mode: "insensitive"
              }
            }
          }
        }
      ]
    }
  })
  const filteredSearchedMinters = searchedMinters.filter((minter) => {
    const isEmail = search.includes("@") && search.includes(".")

    if (!isEmail) {
      return true
    }

    const isSearchEqualToEmail = minter.users.some((user) => user.email === search)

    if (!isSearchEqualToEmail) {
      return true
    }

    return minter.isSearchableByEmail
  })

  return filteredSearchedMinters.map((minter) => ({
    ...minter,
    isFollowed: followedIds.includes(minter.id)
  }))
}
