import Providers from "@/providers/providers"
import Footer from "@/components/footer"
import React from "react"

export default function CoreLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <Providers>
        {children}
        <Footer />
      </Providers>
    </main>
  )
}
