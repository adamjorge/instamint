import { randomBytes } from "crypto"

export function generateChangeToken() {
  return randomBytes(32).toString("hex")
}
