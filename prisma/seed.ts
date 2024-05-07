import { PrismaClient } from "@prisma/client"

import {
  createComments,
  createHashtags,
  createMinters,
  createNfts,
  createOriginalContents,
  createReports,
  createTeaBags,
  createUsers
} from "./scripts"

const prisma = new PrismaClient()

async function main() {
  await createMinters(prisma)
  await createUsers(prisma)
  await createHashtags(prisma)
  await createOriginalContents(prisma)
  await createNfts(prisma)
  await createComments(prisma)
  await createTeaBags(prisma)
  await createReports(prisma)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error: unknown) => {
    await prisma.$disconnect()
    throw new Error(error as string)
  })
