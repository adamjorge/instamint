import Footer from "@/components/custom/footer"
import { signOut } from "@/lib/auth"
import React from "react"

import { Button } from "@/components/ui/button"

export default function PortalLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <Button type="submit" className="bg-red-500">
          Sign out
        </Button>
      </form>
      <div>{children}</div>
      <Footer />
    </div>
  )
}
