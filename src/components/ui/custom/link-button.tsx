import { Button } from "@/components/ui/button"
import { Link as LocaleLink } from "@/config/i18n/locales"
import DefaultLink from "next/link"
import React from "react"

export default function LinkButton({
  href,
  children,
  className,
  withLocale,
  ...props
}: LinkButtonProps) {
  const button = (
    <Button className={className} {...props}>
      {children}
    </Button>
  )

  return withLocale ? (
    <LocaleLink href={href} passHref>
      {button}
    </LocaleLink>
  ) : (
    <DefaultLink href={href} passHref>
      {button}
    </DefaultLink>
  )
}

type LinkButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
  withLocale?: boolean
}
