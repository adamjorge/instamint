import { Metrics } from "@/constants/metrics"
import type { Metric } from "@/validators/types/metric"

export function isValidMetric(metric: string): metric is Metric {
  return Object.values(Metrics).includes(metric as Metric)
}
