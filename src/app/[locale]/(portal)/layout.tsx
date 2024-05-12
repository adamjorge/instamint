import Footer from "@/components/custom/footer"
import { Button } from "@/components/ui/button"
import { signOut } from "@/lib/auth"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"

export default function PortalLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const t = useTranslations("global")

  return (
    <div>
      <div className="flex w-full justify-between border-b pb-8 mb-10" aria-label="header">
        <form
          action={async () => {
            "use server"
            await signOut()
          }}
          className="mt-5 ml-5"
        >
          <Button type="submit" className="bg-error">
            {t("signOut")}
          </Button>
        </form>
        <Image
          src="/instamint.svg"
          alt="Instamint Logo"
          width={60}
          height={25}
          priority
          className="mr-5 -mt-8"
        />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  )
}
