import prisma from "@/lib/db"
import { dateQuery } from "@/lib/utils/metrics/dateQuery"
import { months } from "@/lib/utils/metrics/months"
import type { TimePeriod } from "@/validators/types/timePeriod"

export async function countActiveMinters(period: TimePeriod) {
  const date = dateQuery(period)

  if (period !== "diff") {
    return await prisma.minter.count({
      where: {
        OR: [
          {
            originalContents: {
              some: {
                createdAt: {
                  gte: date
                }
              }
            }
          },
          {
            comments: {
              some: {
                createdAt: {
                  gte: date
                }
              }
            }
          }
        ]
      }
    })
  }

  const { lastMonth, currentMonth } = months()

  return await calculateDiff(currentMonth, lastMonth)
}

async function calculateDiff(currentMonth: Date, lastMonth: Date) {
  const mintersLastMonth = await calculateForLastMonth(lastMonth)
  const mintersCurrentMonth = await calculateForCurrentMonth(currentMonth)
  const metric = Math.abs(mintersCurrentMonth - mintersLastMonth)

  return metric
}

async function calculateForLastMonth(lastMonth: Date) {
  return await prisma.minter.count({
    where: {
      OR: [
        {
          originalContents: {
            some: {
              createdAt: {
                gte: lastMonth
              }
            }
          }
        },
        {
          comments: {
            some: {
              createdAt: {
                gte: lastMonth
              }
            }
          }
        }
      ]
    }
  })
}

async function calculateForCurrentMonth(currentMonth: Date) {
  return await prisma.minter.count({
    where: {
      OR: [
        {
          originalContents: {
            some: {
              createdAt: {
                gte: currentMonth
              }
            }
          }
        },
        {
          comments: {
            some: {
              createdAt: {
                gte: currentMonth
              }
            }
          }
        }
      ]
    }
  })
}
