import prisma from "@/lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

// eslint-disable-next-line new-cap
export const { auth, signIn, signOut, handlers } = NextAuth({
  // eslint-disable-next-line new-cap
  adapter: PrismaAdapter(prisma),
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
  ],
  session: {
    strategy: "jwt"
  }
})
