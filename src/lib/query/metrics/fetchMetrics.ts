import { metricsSchema } from "@/validators/schemas/metricsSchema"
import axios from "axios"

export async function fetchMetrics() {
  const dailyActiveMinters = axios
    .get("/api/metrics?period=daily&metric=activeMinters")
    .then((res) => metricsSchema.parse(res.data))
  const monthlyActiveMinters = axios
    .get("/api/metrics?period=monthly&metric=activeMinters")
    .then((res) => metricsSchema.parse(res.data))
  const diffActiveMinters = axios
    .get("/api/metrics?period=diff&metric=activeMinters")
    .then((res) => metricsSchema.parse(res.data))
  const dailyCommentsByNfts = axios
    .get("/api/metrics?period=daily&metric=commentsByNfts")
    .then((res) => metricsSchema.parse(res.data))
  const monthlyCommentsByNfts = axios
    .get("/api/metrics?period=monthly&metric=commentsByNfts")
    .then((res) => metricsSchema.parse(res.data))
  const diffCommentsByNfts = axios
    .get("/api/metrics?period=diff&metric=commentsByNfts")
    .then((res) => metricsSchema.parse(res.data))
  const daily = await axios.all([dailyActiveMinters, dailyCommentsByNfts])
  const monthly = await axios.all([monthlyActiveMinters, monthlyCommentsByNfts])
  const diff = await axios.all([diffActiveMinters, diffCommentsByNfts])

  return { daily, monthly, diff }
}
