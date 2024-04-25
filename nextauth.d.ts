import type { DefaultSession } from "@auth/core/types"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      isAdmin: boolean
    } & DefaultSession["user"]
  }
}
