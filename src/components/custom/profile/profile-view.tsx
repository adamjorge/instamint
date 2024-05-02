"use client"

import ProfileChanges from "@/components/custom/profile/profile-changes"
import ProfileMenu from "@/components/custom/profile/profile-menu"
import { handleDeleteUser } from "@/lib/query/users/handleDeleteUser"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

export default function ProfileView({ userId }: { userId: string }) {
  const mutation = useMutation({
    mutationFn: () => handleDeleteUser(userId),
    onSuccess: () => {
      toast.warning("User deleted successfully")
    }
  })
  const handleClickOnDelete = () => {
    mutation.mutate()
  }

  return (
    <div className="h-screen flex mt-10 items-baseline">
      <ProfileMenu />
      <ProfileChanges handleClickOnDelete={handleClickOnDelete} />
    </div>
  )
}
