import axios from "axios"

export default async function fetchDeleteMinter(minterId: string) {
  return await axios.delete(`/api/minters/${minterId}`)
}
