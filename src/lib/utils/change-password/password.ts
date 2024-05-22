import bcryptjs from "bcryptjs"

export async function comparePassword(password: string, hash: string) {
  return await bcryptjs.compare(password, hash)
}

export async function generatePasswordHash(password: string) {
  const salt = await bcryptjs.genSalt(10)

  return bcryptjs.hash(password, salt)
}
