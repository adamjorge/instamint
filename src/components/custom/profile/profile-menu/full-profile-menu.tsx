"use client"

import ApplicationMenu from "@/components/custom/profile/profile-menu/application-menu"
import HowToMenu from "@/components/custom/profile/profile-menu/how-to-menu"
import PrivacyMenu from "@/components/custom/profile/profile-menu/privacy-menu"
import { Separator } from "@/components/ui/separator"
import clsx from "clsx"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(true)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="fixed flex w-full justify-end">
        <a className="mr-5 cursor-pointer" onClick={toggleMenu} aria-label="burger">
          <RxHamburgerMenu size={20} />
        </a>
      </div>

      <div
        className={clsx("space-y-5 border-r h-screen ml-3 pr-3 transition-all duration-1000", {
          "opacity-100": isOpen,
          "w-0 opacity-0": !isOpen
        })}
        aria-label="profile-menu"
      >
        <HowToMenu />
        <Separator />
        <PrivacyMenu />
        <Separator />
        <ApplicationMenu />
      </div>
    </>
  )
}
