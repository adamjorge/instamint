"use server"

import { signOut } from "@/lib/auth"

export async function signOutAction() {
  return await signOut()
}
