import prisma from "@/lib/db"

export default async function toggleSearchability(id: number) {
  const minter = await prisma.minter.findUniqueOrThrow({ where: { id } })

  return await prisma.minter.update({
    where: { id },
    data: {
      isSearchableByEmail: !minter.isSearchableByEmail
    }
  })
}
