"use client"

import { Menubar, MenubarMenu } from "@/components/ui/menubar/menubar"
import { MenubarContent } from "@/components/ui/menubar/menubar-content"
import { MenubarItem } from "@/components/ui/menubar/menubar-item"
import { MenubarSeparator } from "@/components/ui/menubar/menubar-separator"
import { MenubarTrigger } from "@/components/ui/menubar/menubar-trigger"
import Link from "next/link"
import React from "react"

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex flex-col items-center min-h-screen w-full">
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

      <div className="flex flex-col items-center justify-center flex-grow w-full">{children}</div>
    </main>
  )
}
