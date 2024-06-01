import { PrismaClient } from "@prisma/client"

import {
  seedComments,
  seedHashtags,
  seedMinters,
  seedNfts,
  seedOriginalContents,
  seedReports,
  seedTeaBags,
  seedUsers
} from "./scripts"

const prisma = new PrismaClient()

async function main() {
  await seedMinters(prisma)
  await seedUsers(prisma)
  await seedHashtags(prisma)
  await seedOriginalContents(prisma)
  await seedNfts(prisma)
  await seedComments(prisma)
  await seedTeaBags(prisma)
  await seedReports(prisma)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error: unknown) => {
    await prisma.$disconnect()
    throw new Error(error as string)
  })
