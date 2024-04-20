import { PaginationItem, PaginationLink, PaginationNext } from "@/components/ui/pagination"

export default function Next({ currentPage, totalPages, setPage }: NextProps) {
  return (
    <>
      {currentPage < totalPages && (
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              setPage(currentPage + 1)
            }}
          >
            <PaginationNext />
          </PaginationLink>
        </PaginationItem>
      )}
    </>
  )
}

type NextProps = {
  currentPage: number
  totalPages: number
  setPage: (page: number) => void
}
