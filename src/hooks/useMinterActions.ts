import fetchDeleteMinter from "@/lib/query/minters/fetchDeleteMinter"
import fetchDisableMinter from "@/lib/query/minters/fetchDisableMinter"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export default function useMinterActions() {
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

  return {
    deleteMutation,
    disableMutation
  }
}
