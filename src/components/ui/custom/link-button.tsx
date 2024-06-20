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
  const LinkComponent = withLocale ? LocaleLink : DefaultLink

  return (
    <LinkComponent href={href} passHref>
      <Button className={className} {...props}>
        {children}
      </Button>
    </LinkComponent>
  )
}

type LinkButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
  withLocale?: boolean
}
