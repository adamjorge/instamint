import { useLocale, useTranslations } from "next-intl"
import { useCallback } from "react"
import { LuSend } from "react-icons/lu"
import { RWebShare } from "react-web-share"
import { toast } from "sonner"

export default function ShareButton({ title, text, url, iconSize = 24 }: ShareButtonProps) {
  const t = useTranslations("shareNftLink")
  const locale = useLocale()
  const origin = typeof window !== "undefined" ? window.location.origin : ""
  const localizedUrl = locale ? `${origin}/${locale}${url}` : `${origin}${url}`
  const handleShareClick = useCallback(() => {
    navigator.clipboard.writeText(localizedUrl).then(
      () => {
        toast.success(t("successUrlLink"))
      },
      () => {
        toast.error(t("errorCopyMessage"))
      }
    )
  }, [localizedUrl, t])

  return (
    <div onClick={handleShareClick}>
      <RWebShare
        data={{
          text,
          title,
          url: localizedUrl
        }}
      >
        <LuSend size={iconSize} aria-label="share" />
      </RWebShare>
    </div>
  )
}

type ShareButtonProps = {
  title: string
  text: string
  url: string
  iconSize?: number
}
