export function isValidRequest(id: string): boolean {
  if (!id || isNaN(Number(id))) {
    return false
  }

  return true
}
