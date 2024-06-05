import dislikeNft from "@/lib/query/nfts/dislikeNft"
import likeNft from "@/lib/query/nfts/likeNft"
import { NftLikeActionType } from "@/validators/types/nftLikeActionType"

export default function handleNftLikeAction(id: number, userId: number, action: NftLikeActionType) {
  const actionFn = action === "like" ? likeNft : dislikeNft

  return actionFn(id, userId)
}
