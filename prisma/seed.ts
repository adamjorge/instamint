import { PrismaClient } from "@prisma/client"
import {
  createAdmins,
  createComments,
  createHashtags,
  createMinters,
  createNfts,
  createOriginalContents
} from "./scripts"

const prisma = new PrismaClient()

async function main() {
  await createAdmins(prisma)
  await createMinters(prisma)
  await createHashtags(prisma)
  await createOriginalContents(prisma)
  await createNfts(prisma)
  await createComments(prisma)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async () => {
    await prisma.$disconnect()
    process.exit(1)
  })
