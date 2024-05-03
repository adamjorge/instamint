import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { BsFillFileEarmarkPersonFill } from "react-icons/bs"
import { MdNotificationsActive, MdPrivacyTip } from "react-icons/md"

export default function ProfileMenu() {
  return (
    <div className="space-y-5 border-r h-full">
      <div className="w-full flex flex-col items-center">
        <p className="text-medium text-sm">Comment utiliser Instamint</p>
        <div className="mt-3 w-full flex flex-col items-start">
          <Button className="bg-white text-black hover:bg-light w-full flex justify-start">
            <BsFillFileEarmarkPersonFill size={20} />
            <span className="ml-3">Modifier le profil</span>
          </Button>
          <Button className="bg-white text-black hover:bg-light w-full flex justify-start">
            <MdNotificationsActive size={20} />
            <span className="ml-3">Notifications</span>
          </Button>
        </div>
      </div>
      <Separator />
      <div className="w-full space-y-5 flex flex-col items-center">
        <p className="text-medium text-sm">Qui peut voir votre contenu</p>
        <div className="mt-3 w-full flex flex-col items-start">
          <Button className="bg-white text-black hover:bg-light w-full flex justify-start">
            <MdPrivacyTip size={20} />
            <span className="ml-3">Confidentialité du compte</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
