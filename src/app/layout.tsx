import React from "react"

import { Inter } from "next/font/google"
import "./globals.css"

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
