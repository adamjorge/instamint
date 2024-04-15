"use client"

import { FiHome, FiSearch, FiHeart, FiUser } from "react-icons/fi"
import { PiFlower } from "react-icons/pi"
import { useState } from "react"
import Link from "next/link"
import { Drawer, DrawerTrigger } from "@/components/ui/drawer"
import SearchDrawer from "@/components/custom/search/search-drawer"

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

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
          <SearchDrawer setIsOpen={setIsOpen} />
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
      </nav>
    </footer>
  )
}
