"use client"

import ProfileChangesCard from "@/components/custom/profile/profile-changes-card"
import { createChangePassword } from "@/lib/query/users/createChangePassword"
import { handleDeleteUser } from "@/lib/query/users/handleDeleteUser"
import { useMutation } from "@tanstack/react-query"
import { signOut } from "next-auth/react"
import { useLocale, useTranslations } from "next-intl"
import { useCallback } from "react"
import { toast } from "sonner"

export default function ProfileChanges({ userId, minterId, email }: ChangesProps) {
  //Cobazaenazdonad
  const locale = useLocale()
  const t = useTranslations("global")
  const deleteMutation = useMutation({
    mutationFn: () => handleDeleteUser(userId),
    onSuccess: async () => {
      await signOut({ callbackUrl: `/${locale}/login?deleted=true`, redirect: true })
    }
  })
  const changeMutation = useMutation({
    mutationFn: () => createChangePassword(email, locale),
    onError: () => {
      toast.error(t("error"))
    }
  })
  const handleClickOnDelete = useCallback(() => {
    deleteMutation.mutate()
  }, [deleteMutation])
  const handleClickOnChange = useCallback(() => {
    toast.info(t("changePasswordMail"))
    changeMutation.mutate()
  }, [changeMutation, t])
  const profileChangesProps = {
    email,
    minterId,
    handleClickOnDelete,
    handleClickOnChange
  }

  return <ProfileChangesCard {...profileChangesProps} />
}

type ChangesProps = {
  userId: string
  minterId: number
  email: string
}
