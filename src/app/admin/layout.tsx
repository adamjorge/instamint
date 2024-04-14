"use client"

import MenubarLayout from "@/components/custom/menubar-layout"
import Providers from "@/providers/providers"
import React from "react"
import { Toaster } from "sonner"

export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <MenubarLayout />
      <main className="flex flex-col items-center min-h-screen justify-center w-full">
        <Providers>{children}</Providers>
        <Toaster position="bottom-right" richColors />
      </main>
    </>
  )
}
