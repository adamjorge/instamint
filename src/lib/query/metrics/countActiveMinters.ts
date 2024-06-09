import prisma from "@/lib/db"
import { dateQuery } from "@/lib/utils/metrics/dateQuery"
import type { TimePeriod } from "@/validators/types/timePeriod"

/* eslint-disable */

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

  const lastMonth = new Date()
  lastMonth.setMonth(lastMonth.getMonth() - 1)
  const currentMonth = new Date()

  currentMonth.setDate(1)

  const mintersLastMonth = await prisma.minter.count({
    where: {
      OR: [
        {
          originalContents: {
            some: {
              createdAt: {
                gte: lastMonth,
                lt: currentMonth
              }
            }
          }
        },
        {
          comments: {
            some: {
              createdAt: {
                gte: lastMonth,
                lt: currentMonth
              }
            }
          }
        }
      ]
    }
  })
  const mintersCurrentMonth = await prisma.minter.count({
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

  return Math.abs(mintersCurrentMonth - mintersLastMonth)
}
