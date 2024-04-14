"use client"

import type { Comment } from "@/validators/types/commentType"
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
    header: "Creation date of the comment"
  },
  {
    accessorKey: "updatedAt",
    header: "Last update of the comment"
  },
  {
    accessorKey: "nftId",
    header: "Commented NFT ID"
  },
  {
    accessorKey: "minterId",
    header: "Minter ID"
  }
]
