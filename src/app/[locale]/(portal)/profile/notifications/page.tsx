"use client"

import Spinner from "@/components/custom/spinner"
import ErrorMessage from "@/components/ui/custom/error-message"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { fetchNotificationTypes } from "@/lib/query/notification/fetchNotificationTypes"
import { useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"

export default function NotificationsPage() {
  const t = useTranslations("notifications")
  const { data, error, isPending } = useQuery({
    queryKey: ["notificationsTypes"],
    queryFn: fetchNotificationTypes
  })

  if (isPending) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  return (
    <div className="mt-16 w-full flex justify-center">
      <div className="space-y-3 w-2/3">
        {data.map((type) => (
          <div key={type.name} className="flex justify-between">
            <Label>{t(type.name)}</Label>
            <Switch />
          </div>
        ))}
      </div>
    </div>
  )
}
