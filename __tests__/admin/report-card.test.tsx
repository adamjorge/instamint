import ReportCard from "@/components/custom/admin/reports/report-card"
import { ReportValidationSchema } from "@/validators/schemas/reportSchema"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"

describe("Report cards display expected attributes", () => {
  it("should render report components", () => {
    const report = {
      id: 1,
      content: "Inappropriate content",
      createdAt: "2023-09-01T00:00:00.000Z",
      updatedAt: "2023-09-01T00:00:00.000Z",
      minterId: 1,
      teaBagId: null,
      commentId: null
    }
    const reportObject = ReportValidationSchema.parse(report)
    const secondReport = {
      id: 2,
      content: "Inappropriate content 2",
      createdAt: "2023-10-01T00:00:00.000Z",
      updatedAt: "2023-10-01T00:00:00.000Z",
      minterId: null,
      teaBagId: 1,
      commentId: null
    }
    const secondReportObject = ReportValidationSchema.parse(secondReport)
    const thirdReport = {
      id: 3,
      content: "Inappropriate content 3",
      createdAt: "2023-11-01T00:00:00.000Z",
      updatedAt: "2023-11-01T00:00:00.000Z",
      minterId: null,
      teaBagId: null,
      commentId: 1
    }
    const thirdReportObject = ReportValidationSchema.parse(thirdReport)

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
