import { Metrics } from "@/constants/metrics"
import { countCommentsByNfts } from "@/lib/query/metrics/countCommentsByNfts"
import { countMints } from "@/lib/query/metrics/countMints"
import type { Metric } from "@/validators/types/metric"
import type { TimePeriod } from "@/validators/types/timePeriod"

export function calculateMetric(period: TimePeriod, metric: Metric) {
  switch (metric) {
    case Metrics.Mints:
      return countMints(period)

    case Metrics.CommentsByNfts:
      return countCommentsByNfts(period)

    case Metrics.MintsPlusCommentsByNfts:
      break

    case Metrics.ActiveMinters:
      break

    case Metrics.NftViewedByMinter:
      break

    case Metrics.ProfileViewedByMinter:
      break
  }

  return 0
}
