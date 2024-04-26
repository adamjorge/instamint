import prisma from "@/lib/db"
import Credentials from "@auth/core/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import bcryptjs from "bcryptjs"
import NextAuth, { User } from "next-auth"

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

      async authorize(c) {
        const user = await prisma.user.findUnique({
          where: {
            email: c.email as string
          }
        })

        if (!user) {
          return null
        }

        const passwordMatch = await bcryptjs.compare(c.password as string, user.password || "")

        if (!passwordMatch) {
          return null
        }

        return user
      }
    })
  ],
  pages: {
    signIn: "/en/login"
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    session({ session, token }) {
      return {
        ...session,
        user: {
          ...(token.user as User)
        }
      }
    },
    jwt({ token, user }) {
      if (typeof user === "object" && Object.keys(user).length > 0) {
        token.user = user
      }

      return token
    }
  }
})
