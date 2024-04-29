import { useFormatter } from "next-intl"

export default function useRelativeTime(dateInput: string) {
  const formatter = useFormatter()
  const date = new Date(dateInput)

  return formatter.relativeTime(date, { now: new Date() })
}
