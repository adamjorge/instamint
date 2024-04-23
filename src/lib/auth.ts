import authConfig from "@/config/auth.config"
import prisma from "@/lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

// eslint-disable-next-line new-cap
export const { auth, signIn, signOut, handlers } = NextAuth({
  // eslint-disable-next-line new-cap
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt"
  },
  ...authConfig
})
