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
    expect(screen.getByLabelText("how to use instamint")).toBeDefined()
    expect(screen.getByLabelText(/edit profile/u)).toBeDefined()
    expect(screen.getByLabelText(/notifications/u)).toBeDefined()

    expect(screen.getByLabelText(/who can see my profile/u)).toBeDefined()
    expect(screen.getByLabelText(/privacy details/u)).toBeDefined()

    expect(screen.getByLabelText(/your application/u)).toBeDefined()
    expect(screen.getByLabelText(/language/u)).toBeDefined()
    expect(screen.getByLabelText(/privacy policy/u)).toBeDefined()
  })
})
