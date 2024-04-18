import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { locales } from "@/config/i18n/locales"
import { localesToISO } from "@/utils/localesToISO"
import Image from "next/image"

export default function LanguageSelector() {
  return (
    <Select>
      <SelectTrigger className="w-32 mt-3 ml-3">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent className="w-32">
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            <div className="flex">
              <p>{localesToISO(locale).toUpperCase()}</p>
              <Image
                src={`https://flagsapi.com/${localesToISO(locale)}/flat/64.png`}
                alt={locale}
                width={24}
                height={24}
                className="ml-4 -mt-1"
              />
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
