import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

export function createAdmins(prisma: PrismaClient) {
  const adminFullNames = [
    { firstName: "Adam", lastName: "Mehdaoui" },
    { firstName: "Prajay", lastName: "Chaudhary" },
    { firstName: "Jimmy", lastName: "Martin" },
    { firstName: "Mathieu", lastName: "Morgat" }
  ]
  const adminData = adminFullNames.map((name) => ({
    username: faker.internet.userName(name),
    email: faker.internet.email(name),
    profileUrl: "",
    avatarUrl: "",
    bio: "",
    isAdmin: true
  }))

  return prisma.minter.createMany({ data: adminData })
}
