import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import React from "react"
import "./globals.css"

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ["latin"] })
const APP_NAME = "Instamint"
const APP_DEFAULT_TITLE = "Instamint, your social network for minting NFTs"
const APP_TITLE_TEMPLATE = "%s | Instamint"
const APP_DESCRIPTION =
  "Instamint is a social network for minting NFTs. Mint your own NFTs and share them with the world."

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  }
}

export const viewport: Viewport = {
  themeColor: "#ffffff"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
