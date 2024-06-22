import dislikeNft from "@/lib/query/server/nfts/dislikeNft"
import likeNft from "@/lib/query/server/nfts/likeNft"
import { NftLikeActionType } from "@/validators/types/nftLikeActionType"

export default function handleNftLikeAction(id: number, userId: number, action: NftLikeActionType) {
  const actionFn = action === "like" ? likeNft : dislikeNft

  return actionFn(id, userId)
}
