import type { TimePeriod } from "@/validators/types/timePeriod"

export function dateQuery(period: TimePeriod): Date {
  const date = new Date()

  switch (period) {
    case "daily":
      date.setHours(0, 0, 0, 0)

      return date

    case "monthly":
      date.setDate(1)

      return date

    default:
      return date
  }
}
