"use client"

import Spinner from "@/components/custom/spinner"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import fetchMinter from "@/lib/query/client/minters/fetchMinter"
import fetchToggleSearchability from "@/lib/query/client/minters/fetchToggleSearchability"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { useCallback, useState } from "react"
import { toast } from "sonner"

export default function ProfilePrivacy({ userId }: { userId: string }) {
  const [isChecked, setIsChecked] = useState(false)
  const { isPending } = useQuery({
    queryKey: ["searchability", userId],
    queryFn: async () => {
      const { data } = await fetchMinter(parseInt(userId, 10))
      setIsChecked(data.isSearchableByEmail)

      return data
    }
  })
  const t = useTranslations()
  const mutation = useMutation({
    mutationFn: () => fetchToggleSearchability(parseInt(userId, 10)),
    onError: () => {
      toast.error(t("global.error"))
    }
  })
  const handleCheckChange = useCallback(() => {
    setIsChecked(!isChecked)
    mutation.mutate()
  }, [isChecked, mutation])

  if (isPending) {
    return <Spinner />
  }

  return (
    <div className="flex flex-col items-center ml-5 mr-5 mt-10 space-y-5 w-full">
      <h2 className="font-bold text-xl">{t("privacyMenu.privacy")}</h2>
      <div className="flex items-center space-x-2">
        <Switch checked={isChecked} onCheckedChange={handleCheckChange} id="who-can-see-mode" />
        <Label htmlFor="who-can-see-mode">{t("privacy.authorizeSearchByEmail")}</Label>
      </div>
    </div>
  )
}
