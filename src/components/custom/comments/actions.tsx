import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown/dropdown-menu"
import { DropdownMenuContent } from "@/components/ui/dropdown/dropdown-menu-content"
import { DropdownMenuItem } from "@/components/ui/dropdown/dropdown-menu-item"
import { DropdownMenuLabel } from "@/components/ui/dropdown/dropdown-menu-label"
import type { Row } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

export default function Actions({ handleClickOnDelete, handleClickOnWIP, row }: ActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={handleClickOnWIP}>View comment</DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            className="bg-red-600"
            onClick={() => {
              handleClickOnDelete(row.getValue("id"))
            }}
          >
            Delete comment
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

type ActionsProps = {
  handleClickOnDelete: (commentId: string) => void
  handleClickOnWIP: () => void
  row: Row<{
    id: number
    content: string
    createdAt: string
    updatedAt: string | null
    nftId: number
    minterId: number
  }>
}
