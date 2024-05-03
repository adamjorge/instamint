"use client"

import { Button } from "@/components/ui/button"
import { handleDeleteUser } from "@/lib/query/users/handleDeleteUser"
import { useMutation } from "@tanstack/react-query"
import { signOut } from "next-auth/react"
import { useLocale } from "next-intl"

export default function ProfileChanges({ userId }: ChangesProps) {
  const locale = useLocale()
  const mutation = useMutation({
    mutationFn: () => handleDeleteUser(userId),
    onSuccess: async () => {
      await signOut({ callbackUrl: `/${locale}/login?deleted=true`, redirect: true })
    }
  })
  const handleClickOnDelete = () => {
    mutation.mutate()
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2>Modifier le profil</h2>
      <Button className="bg-red-500 text-white hover:bg-medium mt-5" onClick={handleClickOnDelete}>
        Delete your account
      </Button>
    </div>
  )
}

type ChangesProps = {
  userId: string
}
