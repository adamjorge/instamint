import MinterActionsButton from "@/components/custom/admin/minters/minter-actions-button"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown/dropdown-menu"
import { DropdownMenuContent } from "@/components/ui/dropdown/dropdown-menu-content"
import { DropdownMenuItem } from "@/components/ui/dropdown/dropdown-menu-item"
import { DropdownMenuLabel } from "@/components/ui/dropdown/dropdown-menu-label"
import fetchDeleteMinter from "@/lib/query/minters/fetchDeleteMinter"
import fetchDisableMinter from "@/lib/query/minters/fetchDisableMinter"
import { MinterWithCount } from "@/lib/query/minters/fetchMinters"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Row } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { toast } from "sonner"

export function MinterActions({ row }: { row: Row<MinterWithCount> }) {
  const queryClient = useQueryClient()
  const deleteMutation = useMutation({
    mutationFn: (minterId: string) => fetchDeleteMinter(minterId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["minters"] })
      toast.success("Minter deleted successfully")
    },
    onError: () => {
      toast.error("Error deleting minter")
    }
  })
  const disableMutation = useMutation({
    mutationFn: (minterId: string) => fetchDisableMinter(minterId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["minters"] })
      toast.success("Minter disabled successfully")
    },
    onError: () => {
      toast.error("Error disabling minter")
    }
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="text-center">Actions</DropdownMenuLabel>
        <DropdownMenuItem className="flex flex-col gap-3">
          <MinterActionsButton
            minterid={row.getValue("id")}
            mutation={disableMutation}
            text="Disable minter"
          />
          <MinterActionsButton
            minterid={row.getValue("id")}
            mutation={deleteMutation}
            text="Delete minter"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
