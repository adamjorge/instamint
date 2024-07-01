import { NftWrapper } from "@/components/custom/nfts/nft-wrapper"
import { auth } from "@/lib/auth"
import { getMinterByUserId } from "@/lib/query/server/minters/getMinterByUserId"
import { redirect } from "next/navigation"

export default async function NftPage({ params }: { params: { id: string } }) {
  const { id } = params
  const idNumber = parseInt(id, 10)
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  const currentUser = await getMinterByUserId(session.user.id)

  if (!currentUser?.minterId) {
    redirect("/")
  }

  const nftProps = {
    nftId: idNumber,
    minterId: currentUser.minterId
  }

  return <NftWrapper {...nftProps} />
}
