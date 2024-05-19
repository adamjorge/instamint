"use client"

import ProfileChangesCard from "@/components/custom/profile/profile-changes-card"
import { createChangePassword } from "@/lib/query/users/createChangePassword"
import { handleDeleteUser } from "@/lib/query/users/handleDeleteUser"
import { useMutation } from "@tanstack/react-query"
import { signOut } from "next-auth/react"
import { useLocale } from "next-intl"
import { useCallback } from "react"
import { toast } from "sonner"

export default function ProfileChanges({ userId, email }: ChangesProps) {
  const locale = useLocale()
  const deleteMutation = useMutation({
    mutationFn: () => handleDeleteUser(userId),
    onSuccess: async () => {
      await signOut({ callbackUrl: `/${locale}/login?deleted=true`, redirect: true })
    }
  })
  const changeMutation = useMutation({
    mutationFn: () => createChangePassword(email, locale),
    onError: () => {
      toast.error("An error occurred while sending the email")
    }
  })
  const handleClickOnDelete = useCallback(() => {
    deleteMutation.mutate()
  }, [deleteMutation])
  const handleClickOnChange = useCallback(() => {
    toast.info("You will receive an email to change your password.")
    changeMutation.mutate()
  }, [changeMutation])
  const profileChangesProps = {
    handleClickOnDelete,
    handleClickOnChange
  }

  return <ProfileChangesCard {...profileChangesProps} />
}

type ChangesProps = {
  userId: string
  email: string
}
