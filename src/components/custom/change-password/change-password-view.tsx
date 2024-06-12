"use client"

import ChangePasswordForm from "@/components/custom/change-password/change-password-form"
import Spinner from "@/components/custom/spinner"
import ErrorMessage from "@/components/ui/custom/error-message"
import { confirmChangePassword } from "@/lib/query/users/confirmChangePassword"
import findChangeToken from "@/lib/query/users/findChangeToken"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function ChangePasswordView(props: ChangePasswordViewProps) {
  const router = useRouter()
  const t = useTranslations("global")
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
      toast.success(t("successChangePassword"))
    },
    onError: () => {
      toast.error(t("error"))
    }
  })
  const handleClickOnLoginButton = () => {
    router.push("/")
  }
  const { data, error, isPending } = useQuery({
    queryKey: ["resetToken", token],
    queryFn: () => findChangeToken(token)
  })

  if (isPending) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={t("error")} />
  }

  if (!data.tokenVerified) {
    router.push("/login?error=failedTokenVerification")
  }

  const changePasswordProps = {
    mutation,
    handleClickOnLoginButton
  }

  return <ChangePasswordForm {...changePasswordProps} />
}

type ChangePasswordViewProps = {
  token: string
}
