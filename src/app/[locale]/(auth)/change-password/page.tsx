import ChangePasswordView from "@/components/custom/reset-password-view"
import { redirect } from "next/navigation"

export default function ChangePasswordPage(params: resetPasswordParams) {
  if (!params.searchParams.token) {
    redirect(`/${params.params.locale}/login`)
  }

  return <ChangePasswordView token={params.searchParams.token} />
}

type resetPasswordParams = {
  params: {
    locale: string
  }
  searchParams: {
    token: string
  }
}
