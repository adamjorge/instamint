import { useLocale } from "next-intl"
import { LuSend } from "react-icons/lu"
import { RWebShare } from "react-web-share"
import { toast } from "sonner"

export default function ShareButton({ title, text, url, iconSize = 24 }: ShareButtonProps) {
  const locale = useLocale()
  const origin = typeof window !== "undefined" ? window.location.origin : ""
  const localizedUrl = locale ? `${origin}/${locale}${url}` : `${origin}${url}`
  const handleShareClick = () => {
    navigator.clipboard.writeText(localizedUrl).then(
      () => {
        toast.success("URL copied to clipboard!")
      },
      () => {
        toast.error("Failed to copy URL.")
      }
    )
  }

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
