"use client"

import SearchWrapper from "@/components/custom/search/search-wrapper"
import { Drawer, DrawerTrigger } from "@/components/ui/drawer"
import { useLocale } from "next-intl"
import Link from "next/link"
import { useCallback, useState } from "react"
import { FiHeart, FiHome, FiSearch, FiUser } from "react-icons/fi"
import { PiFlower } from "react-icons/pi"
import { toast } from "sonner"

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClickOnWIP = useCallback(() => {
    toast.error("This feature is a work in progress.")
  }, [])
  const locale = useLocale()

  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white">
      <nav className="flex justify-around">
        <Link href="/">
          <FiHome className="w-6 h-6 text-medium hover:text-sea" />
        </Link>
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger>
            <FiSearch className="w-6 h-6 text-medium hover:text-sea" />
          </DrawerTrigger>
          <SearchWrapper isOpen={isOpen} setIsOpen={setIsOpen} />
        </Drawer>
        <button onClick={handleClickOnWIP}>
          <PiFlower className="w-6 h-6 text-medium hover:text-sea" />
        </button>
        <button onClick={handleClickOnWIP}>
          <FiHeart className="w-6 h-6 text-medium hover:text-sea" />
        </button>
        <Link href={`/${locale}/profile/change`}>
          <FiUser className="w-6 h-6 text-medium hover:text-sea" />
        </Link>
      </nav>
    </footer>
  )
}
