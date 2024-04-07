import { faker } from "@faker-js/faker"
import { PrismaClient } from "@prisma/client"

export async function createAdmins(prisma: PrismaClient) {
  const adminFullNames = [
    { firstName: "Adam", lastName: "Mehdaoui" },
    { firstName: "Prajay", lastName: "Chaudhary" },
    { firstName: "Jimmy", lastName: "Martin" },
    { firstName: "Mathieu", lastName: "Morgat" }
  ]

  const adminData = adminFullNames.map((name) => ({
    username: faker.internet.userName(name),
    email: faker.internet.email(name),
    password: "pa$$word",
    profileUrl: "",
    avatarUrl: "",
    bio: "",
    isAdmin: true
  }))

  return prisma.minter.createMany({ data: adminData })
}
