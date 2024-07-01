import axios from "axios"

export default async function fetchDisableMinter(minterId: string) {
  return await axios.patch(`/api/minters/${minterId}/disable`)
}
