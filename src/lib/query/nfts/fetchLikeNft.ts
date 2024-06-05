import axios from "axios"

export default async function fetchLikeNft(nftId: number) {
  const { data } = await axios.post<{ isLiked: boolean }>(`/api/nfts/${nftId.toString()}/like`)
  const { isLiked } = data

  return isLiked
}
