import ApplicationMenu from "@/components/custom/profile/profile-menu/application-menu"
import HowToMenu from "@/components/custom/profile/profile-menu/how-to-menu"
import PrivacyMenu from "@/components/custom/profile/profile-menu/privacy-menu"
import { Separator } from "@/components/ui/separator"

export default function ProfileMenu() {
  return (
    <div className="space-y-5 border-r h-full ml-3 pr-3 hidden sm:block">
      <HowToMenu />
      <Separator />
      <PrivacyMenu />
      <Separator />
      <ApplicationMenu />
    </div>
  )
}
