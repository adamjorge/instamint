import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTranslations } from "next-intl"

export default function Notification(props: NotificationProps) {
  const t = useTranslations("notifications")
  const { key, name } = props

  return (
    <div key={key} className="flex justify-between">
      <Label>{t(name)}</Label>
      <Switch />
    </div>
  )
}

type NotificationProps = {
  key: string
  name: string
}
