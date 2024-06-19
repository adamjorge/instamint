import { Metrics } from "@/constants/metrics"

export type Metric = (typeof Metrics)[keyof typeof Metrics]
