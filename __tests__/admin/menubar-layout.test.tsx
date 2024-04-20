import MenubarLayout from "@/components/custom/admin/menubar-layout"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"

describe("Menubar display expected links", () => {
  it("should render report components", () => {
    render(<MenubarLayout />)
    const menuItems = screen.getAllByRole("menuitem")

    expect(menuItems).toHaveLength(3)

    expect(screen.getByRole("menuitem", { name: "Reports" })).toBeDefined()
    expect(screen.getByRole("menuitem", { name: "Application activity" })).toBeDefined()
  })
})
