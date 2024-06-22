import { blockchainDataSchema } from "@/validators/schemas/blockchainDataSchema"
import axios from "axios"

export async function fetchBlockchainData(blockhains: string[]) {
  const promises = blockhains.map(async (blockchain) => {
    const response = await axios.get(`/api/blockchain-data?symbol=${blockchain}`)
    const blockchainData = blockchainDataSchema.parse(response.data)

    return blockchainData
  })

  return await Promise.all(promises)
}
