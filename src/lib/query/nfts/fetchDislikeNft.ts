import axios from "axios"

export default async function fetchDislikeNft(nftId: number) {
  const { data } = await axios.patch<{ isLiked: boolean }>(`/api/nfts/${nftId.toString()}/dislike`)
  const { isLiked } = data

  return isLiked
}
