import prisma from "@/lib/db"
import { dateQuery } from "@/lib/utils/metrics/dateQuery"
import { months } from "@/lib/utils/metrics/months"
import type { TimePeriod } from "@/validators/types/timePeriod"

export async function countCommentsByNfts(period: TimePeriod) {
  const date = dateQuery(period)

  if (period !== "diff") {
    const comments = await prisma.comment.count({
      where: {
        createdAt: {
          gte: date
        }
      }
    })
    const nfts = await prisma.nft.count({
      where: {
        createdAt: {
          gte: date
        }
      }
    })

    if (nfts === 0) {
      return 0
    }

    return comments / nfts
  }

  const { lastMonth, currentMonth } = months()

  return await calculateDiff(currentMonth, lastMonth)
}

async function calculateDiff(currentMonth: Date, lastMonth: Date) {
  const commentsLastMonth = await prisma.comment.count({
    where: {
      createdAt: {
        gte: lastMonth,
        lt: currentMonth
      }
    }
  })
  const nftsLastMonth = await prisma.nft.count({
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
  const nftsCurrentMonth = await prisma.nft.count({
    where: {
      createdAt: {
        gte: currentMonth
      }
    }
  })
  const currentMonthMetrics = nftsCurrentMonth === 0 ? 0 : commentsCurrentMonth / nftsCurrentMonth
  const lastMonthMetrics = nftsLastMonth === 0 ? 0 : commentsLastMonth / nftsLastMonth
  const metric = Math.abs(currentMonthMetrics - lastMonthMetrics)

  return metric
}
