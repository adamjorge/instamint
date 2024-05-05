import ProfileMenu from "@/components/custom/profile/profile-menu/full-profile-menu"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import { IntlProvider } from "next-intl"

import language from "../../locales/en.json"

describe("profile menu displays expected content", () => {
  it("should render child components when open", () => {
    render(
      <IntlProvider messages={language} locale="en">
        <ProfileMenu />
      </IntlProvider>
    )
    expect(screen.getByText(/How to use Instamint/u)).toBeDefined()
    expect(screen.getByText(/Edit profile/u)).toBeDefined()
    expect(screen.getByText(/Notifications/u)).toBeDefined()

    expect(screen.getByText(/Who can see my profile?/u)).toBeDefined()
    expect(screen.getByText(/Privacy/u)).toBeDefined()

    expect(screen.getByText(/Your application/u)).toBeDefined()
    expect(screen.getByText(/Language/u)).toBeDefined()
  })
})
