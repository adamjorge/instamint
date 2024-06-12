import Ellipsis from "@/components/custom/admin/table/pagination/pagination-ellipsis"
import Next from "@/components/custom/admin/table/pagination/pagination-next"
import Numbers from "@/components/custom/admin/table/pagination/pagination-numbers"
import Previous from "@/components/custom/admin/table/pagination/pagination-previous"
import { Pagination, PaginationContent } from "@/components/ui/pagination"
import { PaginationProps } from "@/validators/types/paginationProps"

export function AdminTablePagination({ currentPage, totalPages, setPage }: PaginationProps) {
  const paginationProps: PaginationProps = {
    currentPage,
    totalPages,
    setPage
  }

  return (
    <Pagination className="mt-5">
      <PaginationContent>
        <Previous {...paginationProps} />
        <Numbers {...paginationProps} />
        <Ellipsis {...paginationProps} />
        <Next {...paginationProps} />
      </PaginationContent>
    </Pagination>
  )
}
