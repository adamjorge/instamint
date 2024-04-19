import Ellipsis from "@/components/custom/comments/pagination/pagination-ellipsis"
import Next from "@/components/custom/comments/pagination/pagination-next"
import Numbers from "@/components/custom/comments/pagination/pagination-numbers"
import Previous from "@/components/custom/comments/pagination/pagination-previous"
import { Pagination, PaginationContent } from "@/components/ui/pagination"

export function CommentsPagination({ currentPage, totalPages, setPage }: PaginationProps) {
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

type PaginationProps = {
  currentPage: number
  totalPages: number
  setPage: (page: number) => void
}
