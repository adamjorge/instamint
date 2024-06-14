import { Metrics } from "@/constants/metrics"
import { countActiveMinters } from "@/lib/query/metrics/countActiveMinters"
import { countCommentsByNfts } from "@/lib/query/metrics/countCommentsByNfts"
import type { Metric } from "@/validators/types/metric"
import type { TimePeriod } from "@/validators/types/timePeriod"

export async function calculateMetric(period: TimePeriod, metric: Metric) {
  switch (metric) {
    case Metrics.CommentsByNfts:
      return await countCommentsByNfts(period)

    case Metrics.ActiveMinters:
      return await countActiveMinters(period)

    default:
      throw new Error("Invalid metric")
  }
}
