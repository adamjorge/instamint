import ReportCard from "@/components/custom/admin/reports/report-card"
import { ReportValidationSchema } from "@/validators/schemas/reportSchema"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import mockedReportsResult from "./report-mock-response.json"

describe("report cards display expected attributes", () => {
  it("should render report components", () => {
    const reportObject = ReportValidationSchema.parse(mockedReportsResult.reports[0])
    const secondReportObject = ReportValidationSchema.parse(mockedReportsResult.reports[1])
    const thirdReportObject = ReportValidationSchema.parse(mockedReportsResult.reports[2])

    render(<ReportCard report={reportObject} type="minters" />)
    expect(screen.getByText("Report ID: 1")).toBeDefined()
    expect(screen.getByText("Inappropriate content")).toBeDefined()
    expect(screen.getByText("Minter report created at: 2023-09-01")).toBeDefined()

    render(<ReportCard report={secondReportObject} type="teabags" />)
    expect(screen.getByText("Report ID: 2")).toBeDefined()
    expect(screen.getByText("Inappropriate content 2")).toBeDefined()
    expect(screen.getByText("Teabag report created at: 2023-10-01")).toBeDefined()

    render(<ReportCard report={thirdReportObject} type="comments" />)
    expect(screen.getByText("Report ID: 3")).toBeDefined()
    expect(screen.getByText("Inappropriate content 2")).toBeDefined()
    expect(screen.getByText("Comment report created at: 2023-11-01")).toBeDefined()
  })
})
