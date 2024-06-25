"use client"

import Notification from "@/components/custom/profile/notifications/notification"
import Spinner from "@/components/custom/spinner"
import ErrorMessage from "@/components/ui/custom/error-message"
import { fetchMinterPreferences } from "@/lib/query/client/notifications/fetchMinterPreferences"
import { useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"

export default function NotificationPreferences(props: notificationPreferencesProps) {
  const t = useTranslations("notificationPreferences")
  const { minterId } = props
  const { data, error, isPending } = useQuery({
    queryKey: ["notificationsTypes"],
    queryFn: () => fetchMinterPreferences(minterId)
  })

  if (isPending) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  return (
    <div className="-mt-96 w-full flex flex-col justify-center items-center space-y-8">
      <h2 className="font-bold text-xl">{t("notification")}</h2>
      <div className="space-y-3 w-2/3">
        {data.map((preference, index) => {
          const notificationProps = {
            name: preference.type,
            isEnabled: preference.isEnabled,
            minterId
          }

          return (
            <Notification key={`${index.toString()}-${preference.type}`} {...notificationProps} />
          )
        })}
      </div>
    </div>
  )
}

type notificationPreferencesProps = {
  minterId: number
}
