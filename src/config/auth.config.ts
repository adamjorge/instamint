import prisma from "@/lib/db"
import { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"

// eslint-disable-next-line new-cap
export default {
  providers: [
    // eslint-disable-next-line new-cap
    Credentials({
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize() {
        const user = await prisma.user.findFirst({
          where: {
            email: "admin@admin",
            password: "admin"
          }
        })

        if (!user) {
          throw new Error("No user found")
        }

        return user
      }
    })
  ]
} satisfies NextAuthConfig
