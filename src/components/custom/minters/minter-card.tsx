import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MinterSearchMinterSchemaType } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import Image from "next/image"

export default function MinterCard(minter: MinterSearchMinterSchemaType) {
  return (
    <Card className="bg-muted m-4">
      <CardHeader>
        <Image
          className="self-center"
          src={minter.avatarUrl}
          alt={`Minter ${minter.id.toString()}`}
          width={400}
          height={400}
        />
        <CardTitle className="text-xl">@{minter.username}</CardTitle>
        <CardDescription>{minter.bio}</CardDescription>
      </CardHeader>
    </Card>
  )
}
