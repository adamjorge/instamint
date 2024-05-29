import prisma from "@/lib/db"
import type { TimePeriod } from "@/validators/types/timePeriod"

export async function countNfts(period: TimePeriod) {
  const date = dateQuery(period)

  if (period !== "diff") {
    return await prisma.nft.count({
      where: {
        createdAt: {
          gte: date
        }
      }
    })
  }

  const lastMonth = new Date()
  lastMonth.setMonth(lastMonth.getMonth() - 1)
  const currentMonth = new Date()
  currentMonth.setDate(1)

  const countLastMonth = await prisma.nft.count({
    where: {
      createdAt: {
        gte: lastMonth,
        lt: currentMonth
      }
    }
  })
  const countCurrentMonth = await prisma.nft.count({
    where: {
      createdAt: {
        gte: currentMonth
      }
    }
  })

  return Math.abs(countCurrentMonth - countLastMonth)
}

function dateQuery(period: TimePeriod): Date {
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
