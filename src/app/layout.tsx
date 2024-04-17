"use client"

import React from "react"

import { LangProvider, useLanguage } from "@/contexts/langContext"

import { Inter } from "next/font/google"
import "./globals.css"

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()

  return (
    <LangProvider>
      <html lang={language}>
        <body className={inter.className}>{children}</body>
      </html>
    </LangProvider>
  )
}
