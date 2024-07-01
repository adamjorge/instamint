import axiosClient from "@/lib/client"

export default async function fetchLikeNft(nftId: number, minterId: number) {
  const { data } = await axiosClient.post<{ isLiked: boolean }>(
    `/nfts/${nftId.toString()}/${minterId.toString()}/like`
  )
  const { isLiked } = data

  return isLiked
}
