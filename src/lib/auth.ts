import { SIGN_IN_ERRORS } from "@/constants/signInErrors"
import prisma from "@/lib/db"
import Credentials from "@auth/core/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import bcryptjs from "bcryptjs"
import NextAuth, { CredentialsSignin, User } from "next-auth"

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

        if (!user || user.deletedAt !== null) {
          return null
        }

        if (!user.isActivated) {
          const error = new CredentialsSignin("User is not activated")
          error.code = SIGN_IN_ERRORS.USER_NOT_ACTIVATED

          throw error
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
    signIn: "/login"
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
  },
  trustHost: true
})
