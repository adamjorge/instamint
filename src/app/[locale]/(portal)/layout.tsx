import Footer from "@/components/custom/footer"
import Header from "@/components/custom/header"
import React from "react"

export default function PortalLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}
