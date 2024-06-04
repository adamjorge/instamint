"use client"

import Notification from "@/components/custom/profile/notifications/notification"
import Spinner from "@/components/custom/spinner"
import ErrorMessage from "@/components/ui/custom/error-message"
import { fetchMinterPreferences } from "@/lib/query/notification/fetchMinterPreferences"
import { useQuery } from "@tanstack/react-query"

export default function NotificationPreferences() {
  const { data, error, isPending } = useQuery({
    queryKey: ["notificationsTypes"],
    queryFn: () => fetchMinterPreferences("1")
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
        {data.map((preference) => (
          <Notification key={`${preference.id}-${preference.type}`} name={preference.type} />
        ))}
      </div>
    </div>
  )
}
