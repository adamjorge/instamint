import { AdminTable } from "@/components/custom/admin/table/admin-table"
import { describe, expect, it } from "@jest/globals"
import type { Row } from "@tanstack/react-table"
import { render, screen } from "@testing-library/react"

import columns from "./column-mock-response.json"
import comments from "./comment-mock-response.json"

const emptyColumns: Row<{ name: string; email: string }>[] = []

describe("admin table display corectly", () => {
  it("renders table data correctly", () => {
    render(<AdminTable columns={columns.data} data={comments.data} />)

    expect(screen.getByText("Name")).toBeDefined()
    expect(screen.getByText("Email")).toBeDefined()

    expect(screen.getByText("John")).toBeDefined()
    expect(screen.getByText("Jane")).toBeDefined()
  })
})

describe("admin table display no results when columns are empty", () => {
  it("renders no results message", () => {
    render(<AdminTable columns={emptyColumns} data={[]} />)

    expect(screen.getByText("No results.")).toBeDefined()
  })
})
