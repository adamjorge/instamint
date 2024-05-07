import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MinterSearchMinterSchemaType } from "@/validators/schemas/search/minters/minterSearchMinterSchema"
import Image from "next/image"

export default function MinterCard(minter: MinterSearchMinterSchemaType) {
  return (
    <Card className="bg-muted m-4">
      <CardHeader className="flex flex-col space-y-5">
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
      <CardFooter>
        <Button>Follow</Button>
      </CardFooter>
    </Card>
  )
}
