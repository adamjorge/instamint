import { blockchainDataSchema } from "@/validators/schemas/blockchainDataSchema"
import axios from "axios"

export async function getDataByBlockchain(blockchain: string) {
  if (!process.env.CRYPTO_API_KEY) {
    throw new Error("CRYPTO_API_KEY is not set")
  }

  const response = await axios.get(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${blockchain}`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CRYPTO_API_KEY
      }
    }
  )
  const blockchainData = blockchainDataSchema.parse(response.data)

  return blockchainData
}
