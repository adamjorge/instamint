import React, { useState } from "react"
import { Button } from "../ui/button"
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose
} from "../ui/drawer"
import { Input } from "../ui/input"
import { useRouter } from "next/navigation"

type SearchProps = {
  setIsOpen: (isOpen: boolean) => void
}

export default function Search({ setIsOpen }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()
  const handleSearchSubmit = () => {
    setIsOpen(false)
    router.push(`/search?search=${encodeURIComponent(searchTerm)}`)
  }
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearchSubmit()
    }
  }

  return (
    <DrawerContent className="bg-light dark:bg-gray-200 dark:text-gray-800">
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Search</DrawerTitle>
          <DrawerDescription>Search an NFT or a minter.</DrawerDescription>
        </DrawerHeader>
        <div className="flex justify-center">
          <Input
            autoFocus
            type="search"
            placeholder="Search ..."
            className="mx-5 w-3/4"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
        <DrawerFooter>
          <div className="flex flex-col items-center">
            <Button onClick={handleSearchSubmit}>Submit</Button>
            <DrawerClose asChild>
              <Button size="sm" variant="outline" className="w-fit">
                Cancel
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </div>
    </DrawerContent>
  )
}
