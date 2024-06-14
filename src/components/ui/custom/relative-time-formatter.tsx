import { useFormatter, useNow } from "next-intl"
import React from "react"

export const RelativeTimeFormatter: React.FC<{ createdAt: string }> = ({ createdAt }) => {
  const now = useNow({ updateInterval: 1000 * 10 })
  const format = useFormatter()
  const formatRelativeTime = () => {
    const createdAtDate = new Date(createdAt)

    return format.relativeTime(createdAtDate, now)
  }

  return <>{formatRelativeTime()}</>
}
