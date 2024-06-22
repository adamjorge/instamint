import { PaginationEllipsis, PaginationItem } from "@/components/ui/pagination"

export default function Ellipsis({ currentPage, totalPages }: EllipsisProps) {
  return (
    currentPage < totalPages && (
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
    )
  )
}

type EllipsisProps = {
  currentPage: number
  totalPages: number
}
