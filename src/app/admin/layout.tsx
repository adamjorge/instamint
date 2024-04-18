"use client"

import MenubarLayout from "@/components/custom/admin/menubar-layout"
import Providers from "@/providers/providers"
import { Inter } from "next/font/google"
import React from "react"
import { Toaster } from "sonner"

import "@/styles/globals.css"

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ["latin"] })

export default function AdminLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <MenubarLayout />
        <main className="flex flex-col items-center min-h-screen justify-center w-full">
          <Providers>{children}</Providers>
          <Toaster position="bottom-right" richColors closeButton />
        </main>
      </body>
    </html>
  )
}
