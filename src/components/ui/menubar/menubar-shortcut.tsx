import { cn } from "@/lib/utils"
import React from "react"

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
    {...props}
  />
)

export { MenubarShortcut }
