"use client"

import MenubarLayout from "@/components/custom/menubar-layout"
import React from "react"

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <MenubarLayout />
      <main className="flex flex-col items-center min-h-screen w-full">
        <div className="flex flex-col items-center justify-center flex-grow w-full">{children}</div>
      </main>
    </>
  )
}
