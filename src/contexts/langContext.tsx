import { i18n } from "@/config/i18n/settings"
import React, { createContext, useContext, useState } from "react"

const LangContext = createContext<LangProviderProps>({ language: i18n.defaultLocale })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string>(i18n.defaultLocale)
  const contextValue: LangProviderProps = { language, setLanguage }

  return <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LangContext)

  return context
}

type LangProviderProps = {
  language: string
  setLanguage?: (lang: string) => void
}
