"use client"

import SearchWrapper from "@/components/custom/search/search-wrapper"
import { Drawer, DrawerTrigger } from "@/components/ui/drawer"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FiHeart, FiHome, FiSearch, FiUser } from "react-icons/fi"
import { PiFlower } from "react-icons/pi"

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white">
      <nav className="flex justify-around">
        <Link href="/">
          <FiHome className="w-6 h-6 text-gray-400 hover:text-green-500" />
        </Link>
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger>
            <FiSearch className="w-6 h-6 text-gray-400 hover:text-green-500" />
          </DrawerTrigger>
          <SearchWrapper isOpen={isOpen} setIsOpen={setIsOpen} />
        </Drawer>
        <button>
          <PiFlower className="w-6 h-6 text-gray-400 hover:text-green-500" />
        </button>
        <button>
          <FiHeart className="w-6 h-6 text-gray-400 hover:text-green-500" />
        </button>
        <button>
          <FiUser className="w-6 h-6 text-gray-400 hover:text-green-500" />
        </button>
        <button
          onClick={async () => {
            await signOut()
            router.push("login?logout=true")
          }}
        >
          <span>Sign out test</span>
        </button>
      </nav>
    </footer>
  )
}
