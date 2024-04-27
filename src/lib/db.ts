import { PrismaClient } from "@prisma/client"

const prismaSingleton = () =>
  new PrismaClient({
    log: ["query", "info", "warn", "error"]
  })

declare global {
  //! Don't delete "var" keyword
  //! See https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

  // eslint-disable-next-line no-var, init-declarations
  var prismaGlobal: undefined | ReturnType<typeof prismaSingleton>
}

const prisma = global.prismaGlobal ?? prismaSingleton()

export default prisma

if (process.env.NODE_ENV !== "production" && !global.prismaGlobal) {
  global.prismaGlobal = prisma
}
