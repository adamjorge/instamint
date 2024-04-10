import { searchNfts } from "@/lib/query/search"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const search = searchParams.get("search")

  if (!search) {
    return Response.json({ message: "Missing search parameter" }, { status: 400 })
  }

  const nfts = await searchNfts(search)

  return Response.json({ nfts })
}
