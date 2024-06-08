import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { changePreferenceAction } from "@/lib/query/notification/changePreferenceAction"
import { useMutation } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { toast } from "sonner"

export default function Notification(props: NotificationProps) {
  const t = useTranslations()
  const { name, isEnabled, minterId } = props
  const [isChecked, setIsChecked] = useState(isEnabled)
  const mutation = useMutation({
    mutationFn: () => changePreferenceAction(minterId, name),
    onSuccess: () => {
      toast.success(t("notificationPreferences.changeSuccess"))
    },
    onError: () => {
      toast.error(t("notificationPreferences.changeError"))
    }
  })
  const handleClickOnSwitch = () => {
    setIsChecked(!isChecked)
    mutation.mutate()
  }

  return (
    <div className="flex justify-between">
      <Label>{t(`notifications.${name.toLocaleLowerCase()}`)}</Label>
      <Switch checked={isChecked} onClick={handleClickOnSwitch} />
    </div>
  )
}

type NotificationProps = {
  name: string
  isEnabled: boolean
  minterId: number
}
