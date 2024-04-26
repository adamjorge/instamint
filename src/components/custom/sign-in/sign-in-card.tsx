"use client"

import SignInWrapper from "@/components/custom/sign-in/sign-in-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from "next-intl"
import { Lora } from "next/font/google"
import Image from "next/image"
import { toast } from "sonner"

// eslint-disable-next-line new-cap
const lora = Lora({ subsets: ["latin"], weight: "700" })

export default function SignInCard() {
  const t = useTranslations("login")

  return (
    <Card className="mx-10 mt-5 space-y-5 p-10">
      <CardHeader>
        <CardTitle className="flex space-x-5 items-center justify-center">
          <Image
            src="/instamint.svg"
            alt="Instamint Logo"
            className="dark:invert"
            width={60}
            height={25}
            priority
          />
          <span className={lora.className}>Instamint</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SignInWrapper />
      </CardContent>
      <CardFooter className="flex flex-col text-sm">
        <p>{t("accountQuestion")}</p>
        <Button onClick={() => toast.error("This feature is a work in progress")} className="mt-3">
          {t("signUp")}
        </Button>
        <p className="text-gray-500 mt-6">{t("rights")}</p>
      </CardFooter>
    </Card>
  )
}
