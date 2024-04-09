"use client"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger
} from "@/components/ui/menubar"
import Link from "next/link"
import React from "react"

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Menubar className="fixed top-0 w-full">
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
          <MenubarContent>
            <Link href="/admin">
              <MenubarItem>Home</MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>
        <MenubarSeparator />
        <MenubarMenu>
          <MenubarTrigger>Reports</MenubarTrigger>
          <MenubarContent>
            <Link href="/admin/reports/minter">
              <MenubarItem>Minters</MenubarItem>
            </Link>
            <MenubarItem>Tea-bags</MenubarItem>
            <MenubarItem>Comments</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <div className="flex flex-col items-center justify-center flex-grow">{children}</div>
    </main>
  )
}
