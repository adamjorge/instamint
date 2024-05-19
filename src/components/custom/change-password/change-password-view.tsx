"use client"

import ChangePasswordForm from "@/components/custom/change-password/change-password-form"
import { confirmChangePassword } from "@/lib/query/users/confirmChangePassword"
import findChangeToken from "@/lib/query/users/findChangeToken"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function ChangePasswordView(props: ChangePasswordViewProps) {
  const router = useRouter()
  const { token } = props
  const mutation = useMutation({
    mutationFn: ({
      currentPassword,
      newPassword
    }: {
      currentPassword: string
      newPassword: string
    }) => confirmChangePassword(token, currentPassword, newPassword),
    onSuccess: () => {
      toast.success("Password changed successfully")
    },
    onError: () => {
      toast.error("An error occurred while changing your password")
    }
  })
  const handleClickOnLoginButton = () => {
    router.push("/login")
  }
  const { data, error, isPending } = useQuery({
    queryKey: ["resetToken", token],
    queryFn: () => findChangeToken(token)
  })

  if (isPending) {
    return <div className="text-center">Loading...</div>
  }

  if (error) {
    return <div className="text-center">Error</div>
  }

  if (!data.tokenVerified) {
    router.push("/login?error=failedTokenVerification")
  }

  return <ChangePasswordForm mutation={mutation} handleClickOnLoginButton={handleClickOnLoginButton} />
}

type ChangePasswordViewProps = {
  token: string
}
