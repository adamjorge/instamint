import prisma from "@/lib/db"
import { dateQuery } from "@/lib/utils/metrics/dateQuery"
import { months } from "@/lib/utils/metrics/months"
import type { TimePeriod } from "@/validators/types/timePeriod"

export async function countComments(period: TimePeriod) {
  const date = dateQuery(period)

  if (period !== "diff") {
    return await prisma.comment.count({
      where: {
        createdAt: {
          gte: date
        }
      }
    })
  }

  const { lastMonth, currentMonth } = months()
  const commentsLastMonth = await prisma.comment.count({
    where: {
      createdAt: {
        gte: lastMonth,
        lt: currentMonth
      }
    }
  })
  const commentsCurrentMonth = await prisma.comment.count({
    where: {
      createdAt: {
        gte: currentMonth
      }
    }
  })

  return Math.abs(commentsCurrentMonth - commentsLastMonth)
}
