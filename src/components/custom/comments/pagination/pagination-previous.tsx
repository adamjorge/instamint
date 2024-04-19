import { PaginationItem, PaginationPrevious } from "@/components/ui/pagination"

export default function Previous({ currentPage, setPage }: PreviousProps) {
  return (
    <>
      {currentPage > 1 && (
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              setPage(currentPage - 1)
            }}
          />
        </PaginationItem>
      )}
    </>
  )
}

type PreviousProps = {
  currentPage: number
  setPage: (page: number) => void
}
