import { MinterActions } from "@/components/custom/admin/minters/minter-actions"
import { MinterWithCount } from "@/lib/query/minters/fetchMinters"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<MinterWithCount>[] = [
  {
    accessorKey: "id",
    header: "ID"
  },
  {
    accessorKey: "username",
    header: "Username"
  },
  {
    id: "commentsCount",
    accessorKey: "_count.comments",
    header: "Number of comments",
    cell: ({ row }) => row.getValue<number>("commentsCount").toString()
  },
  {
    id: "originalContentsCount",
    accessorKey: "_count.originalContents",
    header: "Number of Original Contents",
    cell: ({ row }) => row.getValue<number>("originalContentsCount").toString()
  },
  {
    id: "actions",
    cell: ({ row }) => <MinterActions row={row} />
  }
]
