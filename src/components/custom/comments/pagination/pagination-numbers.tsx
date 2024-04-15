import { PaginationItem, PaginationLink } from "@/components/ui/pagination"

export default function Numbers({ totalPages, currentPage, setPage }: NumbersProps) {
  return (
    <>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <PaginationItem key={page}>
          <PaginationLink
            onClick={() => {
              setPage(page)
            }}
            isActive={page === currentPage}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
    </>
  )
}

type NumbersProps = {
  totalPages: number
  currentPage: number
  setPage: (page: number) => void
}
