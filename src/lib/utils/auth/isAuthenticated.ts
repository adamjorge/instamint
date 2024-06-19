import { auth } from "@/lib/auth"

export default async function isAuthenticated() {
  const session = await auth()

  return session || false
}
