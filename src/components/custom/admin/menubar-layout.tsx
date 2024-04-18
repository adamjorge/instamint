import { Menubar, MenubarMenu } from "@/components/ui/menubar/menubar"
import { MenubarContent } from "@/components/ui/menubar/menubar-content"
import { MenubarItem } from "@/components/ui/menubar/menubar-item"
import { MenubarSeparator } from "@/components/ui/menubar/menubar-separator"
import { MenubarTrigger } from "@/components/ui/menubar/menubar-trigger"
import Link from "next/link"
import { FaHome } from "react-icons/fa"

export default function MenubarLayout() {
  return (
    <Menubar className="fixed top-0 w-full bg-white">
      <MenubarMenu>
        <MenubarTrigger>
          <FaHome />
        </MenubarTrigger>
        <MenubarContent className="bg-white">
          <Link href="/admin">
            <MenubarItem>Home</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
      <MenubarSeparator />
      <MenubarMenu>
        <MenubarTrigger>Reports</MenubarTrigger>
        <MenubarContent className="bg-white">
          <Link href="/admin/reports/minters">
            <MenubarItem>Minters</MenubarItem>
          </Link>
          <Link href="/admin/reports/teabags">
            <MenubarItem>Tea-bags</MenubarItem>
          </Link>
          <Link href="/admin/reports/comments">
            <MenubarItem>Comments</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
