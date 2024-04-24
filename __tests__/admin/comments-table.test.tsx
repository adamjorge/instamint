import { CommentsTable } from "@/components/custom/comments/comments-table"
import { describe, expect, it } from "@jest/globals"
import type { Row } from "@tanstack/react-table"
import { render, screen } from "@testing-library/react"

const columns = [
  { header: "Name", accessorKey: "name" },
  { header: "Email", accessorKey: "email" }
]
const data = [
  { id: 1, name: "John", email: "john@example.com" },
  { id: 2, name: "Jane", email: "jane@example.com" }
]
const emptyColumns: Row<{ name: string; email: string }>[] = []

describe("Comments table display corectly", () => {
  it("renders table data correctly", () => {
    render(<CommentsTable columns={columns} data={data} />)

    expect(screen.getByText("Name")).toBeDefined()
    expect(screen.getByText("Email")).toBeDefined()

    expect(screen.getByText("John")).toBeDefined()
    expect(screen.getByText("Jane")).toBeDefined()
  })
})

describe("Comments table display no results when columns are empty", () => {
  it("renders no results message", () => {
    render(<CommentsTable columns={emptyColumns} data={[]} />)

    expect(screen.getByText("No results.")).toBeDefined()
  })
})
