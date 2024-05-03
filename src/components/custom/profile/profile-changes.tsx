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
    <div className="flex flex-col items-start ml-5 space-y-5">
      <h2 className="font-bold text-xl">Modifier le profil</h2>
      <Avatar>
        <AvatarFallback>IN</AvatarFallback>
      </Avatar>
      <div>
        <Label htmlFor="bio">Bio</Label>
        <Textarea className="mt-3" placeholder="Bio is a work in progress feature" disabled />
      </div>
      <Dialog>
        <DialogTrigger className="bg-red-500 text-white hover:bg-dark p-2 rounded-lg border">
          Delete your account
        </DialogTrigger>
        <DialogContent className="rounded-lg">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure you want to delete your account?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers in the next wave.
            </DialogDescription>
          </DialogHeader>
          <Button className="bg-red-500 text-white hover:bg-medium" onClick={handleClickOnDelete}>
            I'm sure, delete my account
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

type ChangesProps = {
  userId: string
}
