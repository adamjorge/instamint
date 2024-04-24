import prisma from "@/lib/db"
import Credentials from "@auth/core/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

// eslint-disable-next-line new-cap
export const { handlers, auth, signIn, signOut } = NextAuth({
  // eslint-disable-next-line new-cap
  adapter: PrismaAdapter(prisma),
  providers: [
    // eslint-disable-next-line new-cap
    Credentials({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" }
      },

      // Attendu admin@admin admin
      async authorize(c) {
        const user = await prisma.user.findFirst({
          where: {
            email: c.email as string,
            password: c.password as string
          }
        })

        if (!user) {
          return null
        }

        return user
      }
    })
  ],
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt"
  },
  trustHost: true
})
