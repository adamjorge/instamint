import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TeabagSearchTeabagSchemaType } from "@/validators/schemas/search/teabags/teabagSearchTeabagSchema"

export default function TeaBagCard(teabag: TeabagSearchTeabagSchemaType) {
  return (
    <Card className="bg-muted m-4">
      <CardHeader>
        <CardTitle className="text-xl">@{teabag.name}</CardTitle>
        <CardDescription>{teabag.bio}</CardDescription>
      </CardHeader>
    </Card>
  )
}
