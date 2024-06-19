export function months() {
  const lastMonth = new Date()
  lastMonth.setMonth(lastMonth.getMonth() - 1)
  const currentMonth = new Date()
  currentMonth.setDate(1)

  return {
    lastMonth,
    currentMonth
  }
}
