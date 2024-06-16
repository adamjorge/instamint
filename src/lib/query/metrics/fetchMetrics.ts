import { Metrics } from "@/constants/metrics"
import { metricsSchema } from "@/validators/schemas/metricsSchema"
import type { Metric } from "@/validators/types/metric"
import type { TimePeriod } from "@/validators/types/timePeriod"
import axios from "axios"

async function fetchMetric(period: TimePeriod, metric: Metric) {
  const response = await axios.get(`/api/metrics?period=${period}&metric=${metric}`)

  return metricsSchema.parse(response.data)
}

export async function fetchMetrics() {
  const periods = ["daily", "monthly", "diff"]
  const metrics = Object.values(Metrics)
  const promises = periods.flatMap((period) =>
    metrics.map((metric) => fetchMetric(period as TimePeriod, metric as Metric))
  )
  const results = await Promise.all(promises)
  const [daily, monthly, diff] = periods.map((period, i) =>
    results.filter((_, index) => Math.floor(index / metrics.length) === i)
  )

  return { daily, monthly, diff }
}
