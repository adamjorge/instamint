import { ArcElement, Chart, Legend, Tooltip } from "chart.js"
import { Pie } from "react-chartjs-2"

Chart.register(ArcElement, Legend, Tooltip)

export default function MetricsPie(props: MetricsPieProps) {
  const { title, dailyData, monthlyData, diffData } = props

  return (
    <div className="flex flex-col items-center space-y-5">
      <h2>{title}</h2>
      <Pie
        data={{
          labels: ["Daily", "Monthly", "Diff"],
          datasets: [
            {
              label: "Active minters",
              data: [dailyData, monthlyData, diffData],
              backgroundColor: ["#FF6384", "#36A2EB", "#36FF00"],
              hoverBackgroundColor: ["#FF6384", "#36A2EB", "#36FF00"],
              borderWidth: 1
            }
          ]
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true
        }}
        title={title}
      />
    </div>
  )
}

type MetricsPieProps = {
  title: string
  dailyData: number
  monthlyData: number
  diffData: number
}
