import axiosClient from "@/lib/client"
import { blockchainDataSchema } from "@/validators/schemas/blockchainDataSchema"

export async function fetchBlockchainData(blockhains: string[]) {
  const promises = blockhains.map(async (blockchain) => {
    const response = await axiosClient.get(`/blockchain-data?symbol=${blockchain}`)
    const blockchainData = blockchainDataSchema.parse(response.data)

    return blockchainData
  })

  return await Promise.all(promises)
}
