import SignInCard from "@/components/custom/sign-in/sign-in-card"
import { auth } from "@/lib/auth"
import { useLocale } from "next-intl"
import { redirect } from "next/navigation"

export default async function Page() {
  const session = await auth()
  const locale = useLocale()

  if (session?.user) {
    redirect(`/${locale}`)
  }

  return <SignInCard />
}
