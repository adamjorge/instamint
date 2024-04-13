import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

function getData(): Promise<Payment[]> {
  return Promise.resolve([
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com"
    }
  ])
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
