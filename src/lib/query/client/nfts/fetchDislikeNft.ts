import axiosClient from "@/lib/client"

export default async function fetchDislikeNft(nftId: number, minterId: number) {
  const { data } = await axiosClient.post<{ isLiked: boolean }>(
    `/nfts/${nftId.toString()}/${minterId.toString()}/dislike`
  )
  const { isLiked } = data

  return isLiked
}
