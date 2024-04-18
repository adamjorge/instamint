"use client"

import { CommentActions } from "@/components/custom/comments/actions-wrapper"
import type { Comment } from "@/validators/schemas/commentSchema"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Comment>[] = [
  {
    accessorKey: "id",
    header: "ID"
  },
  {
    accessorKey: "content",
    header: "Content"
  },
  {
    accessorKey: "createdAt",
    header: "Creation date of the comment",
    cell: ({ row }): string => {
      const createdAtValue = row.getValue("createdAt")

      if (typeof createdAtValue === "string") {
        return createdAtValue.slice(0, 10)
      }

      return "Unknown"
    }
  },
  {
    accessorKey: "updatedAt",
    header: "Last update of the comment",
    cell: ({ row }): string => {
      const updatedAt = row.getValue("updatedAt")

      if (typeof updatedAt === "string") {
        return updatedAt.slice(0, 10)
      }

      return "Never updated"
    }
  },
  {
    accessorKey: "nftId",
    header: "Commented NFT ID"
  },
  {
    accessorKey: "minterId",
    header: "Minter ID"
  },
  {
    id: "actions",
    cell: ({ row }) => <CommentActions row={row} />
  }
]
