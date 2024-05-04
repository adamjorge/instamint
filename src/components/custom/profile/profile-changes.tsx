"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { handleDeleteUser } from "@/lib/query/users/handleDeleteUser"
import { useMutation } from "@tanstack/react-query"
import { signOut } from "next-auth/react"
import { useLocale, useTranslations } from "next-intl"
import { useCallback } from "react"

export default function ProfileChanges({ userId }: ChangesProps) {
  const locale = useLocale()
  const t = useTranslations("profileChanges")
  const mutation = useMutation({
    mutationFn: () => handleDeleteUser(userId),
    onSuccess: async () => {
      await signOut({ callbackUrl: `/${locale}/login?deleted=true`, redirect: true })
    }
  })
  const handleClickOnDelete = useCallback(() => {
    mutation.mutate()
  }, [mutation])

  return (
    <div className="flex flex-col items-center ml-5 space-y-5 w-full">
      <h2 className="font-bold text-xl">{t("changeProfile")}</h2>
      <Avatar>
        <AvatarFallback>IN</AvatarFallback>
      </Avatar>
      <div className="self-stretch mr-3">
        <Label htmlFor="bio" className="font-bold text-lg">
          {t("bio")}
        </Label>
        <Textarea className="mt-3" placeholder={t("bioWIP")} disabled />
      </div>
      <Dialog>
        <DialogTrigger className="bg-red-500 text-white hover:bg-dark p-2 rounded-lg border">
          {t("deleteAccount")}
        </DialogTrigger>
        <DialogContent className="rounded-lg">
          <DialogHeader>
            <DialogTitle>{t("deleteAccountConfirmation")}</DialogTitle>
            <DialogDescription>{t("deleteAccountDescription")}</DialogDescription>
          </DialogHeader>
          <Button className="bg-red-500 text-white hover:bg-medium" onClick={handleClickOnDelete}>
            {t("deleteAccount")}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

type ChangesProps = {
  userId: string
}
