import prisma from "@/lib/db"

export async function searchTeaBags(search: string) {
  return await prisma.teaBag.findMany({
    select: {
      id: true,
      name: true,
      profileUrl: true,
      bio: true
    },
    where: {
      name: {
        contains: search,
        mode: "insensitive"
      }
    }
  })
}
