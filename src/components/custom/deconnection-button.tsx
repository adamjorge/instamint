import { Button } from "@/components/ui/button"
import { signOutAction } from "@/lib/query/users/signOut"
import { useTranslations } from "next-intl"

export default function DeconnectionButton() {
  const t = useTranslations("global")

  return (
    <form action={signOutAction}>
      <Button type="submit" className="bg-error" aria-label="sign out">
        {t("signOut")}
      </Button>
    </form>
  )
}
