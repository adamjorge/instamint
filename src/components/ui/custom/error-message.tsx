import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { useTranslations } from "next-intl"

export default function ErrorMessage({ message }: ErrorMessageProps) {
  const t = useTranslations("global")

  return (
    <div className="flex w-full justify-center pt-10">
      <Alert variant="destructive" className="w-fit">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>{t("error")}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  )
}

type ErrorMessageProps = {
  message: string
}
