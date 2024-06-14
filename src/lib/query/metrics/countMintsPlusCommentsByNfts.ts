import prisma from "@/lib/db"
import { countMints } from "@/lib/query/metrics/countMints"
import { dateQuery } from "@/lib/utils/metrics/dateQuery"
import type { TimePeriod } from "@/validators/types/timePeriod"

/* eslint-disable */

export async function countMintsPlusCommentsByNfts(period: TimePeriod) {
  const mints = await countMints(period)
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

    return mints + comments / nfts
  }

  const lastMonth = new Date()
  lastMonth.setMonth(lastMonth.getMonth() - 1)
  const currentMonth = new Date()
  currentMonth.setDate(1)

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

  return Math.abs(
    mints + commentsCurrentMonth / nftsCurrentMonth - commentsLastMonth / nftsLastMonth
  )
}
