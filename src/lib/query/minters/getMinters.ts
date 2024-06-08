import prisma from "@/lib/db"

const ITEMS_PER_PAGE = 15

export default function getMinters(page: string) {
  const pageValue = parseInt(page, 10)
  const skip = pageValue === 1 ? 0 : (pageValue - 1) * ITEMS_PER_PAGE

  return prisma.minter.findMany({
    include: {
      _count: true
    },
    skip,
    take: ITEMS_PER_PAGE
  })
}

export async function getMintersTotalPages() {
  const count = await prisma.minter.count()

  return Math.ceil(count / ITEMS_PER_PAGE)
}
