import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useTranslations } from "next-intl"
import { LuInfo } from "react-icons/lu"

export default function SuccessMessage({ message }: SuccessMessageProps) {
  const t = useTranslations("global")

  return (
    <div className="flex w-full justify-center py-16">
      <Alert className="w-fit text-verdant border-verdant">
        <LuInfo className="h-4 w-4 text-verdant" color="#55ff99" />
        <AlertTitle>{t("success")}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  )
}

type SuccessMessageProps = {
  message: string
}
