"use client"

import { CommentValidationSchema } from "@/validators/schemas/commentSchema"
import { ColumnDef } from "@tanstack/react-table"
import { z } from "zod"

type Comment = z.infer<typeof CommentValidationSchema>

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
