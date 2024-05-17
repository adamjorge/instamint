"use client"

import SignInWrapper from "@/components/custom/sign-in/sign-in-wrapper"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import LinkButton from "@/components/ui/custom/link-button"
import { useTranslations } from "next-intl"
import { Lora } from "next/font/google"
import Image from "next/image"

// eslint-disable-next-line new-cap
const lora = Lora({ subsets: ["latin"], weight: "700" })

export default function SignInCard() {
  const t = useTranslations("login")

  return (
    <Card className="mx-10 mt-5 space-y-5 p-10">
      <CardHeader>
        <CardTitle className="flex space-x-5 items-center justify-center">
          <Image src="/instamint.svg" alt="Instamint Logo" width={60} height={25} priority />
          <span className={lora.className}>Instamint</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SignInWrapper />
      </CardContent>
      <CardFooter className="flex flex-col text-sm space-y-6">
        <p>{t("accountQuestion")}</p>
        <LinkButton withLocale href="/signup">
          {t("signUp")}
        </LinkButton>
        <p className="text-gray-500">
          {t("rights")}
        </p>
        <LinkButton withLocale href="/reset-password">
          {t("forgetPassword")}
        </LinkButton>
      </CardFooter>
    </Card>
  )
}
