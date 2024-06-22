"use client"

import MetricsPie from "@/components/custom/admin/metrics/metrics-pie"
import MetricsTable from "@/components/custom/admin/metrics/metrics-table"
import Spinner from "@/components/custom/spinner"
import ErrorMessage from "@/components/ui/custom/error-message"
import { metricsArray } from "@/constants/metrics"
import { fetchMetrics } from "@/lib/query/client/metrics/fetchMetrics"
import { useQuery } from "@tanstack/react-query"

export default function Metrics() {
  const { data, error, isPending } = useQuery({
    queryKey: ["metrics"],
    queryFn: fetchMetrics
  })

  if (isPending) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  const tableMetrics = {
    daily: data.daily,
    monthly: data.monthly,
    diff: data.diff
  }

  return (
    <div className="flex flex-col space-y-10 mt-20">
      <MetricsTable {...tableMetrics} />
      {metricsArray.map((metric, index) => {
        const metricData = {
          title: metric,
          dailyData: data.daily[index],
          monthlyData: data.monthly[index],
          diffData: data.diff[index]
        }

        return <MetricsPie key={index} {...metricData} />
      })}
    </div>
  )
}
