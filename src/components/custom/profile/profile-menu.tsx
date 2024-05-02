import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ProfileMenu() {
  return (
    <div className="space-y-5 border-r">
      <div className="w-full flex flex-col items-center">
        <p className="text-medium text-sm">Comment utiliser Instamint</p>
        <div className="mt-5">
          <Button className="bg-white text-black hover:bg-medium w-full">Modifier le profil</Button>
          <Button className="bg-white text-black hover:bg-medium w-full">Notifications</Button>
        </div>
      </div>
      <Separator />
      <div className="w-full space-y-5 flex flex-col items-center">
        <p className="text-medium text-sm">Qui peut voir votre contenu</p>
        <div className="mt-5">
          <div>
            <Button className="bg-white text-black hover:bg-medium w-full">
              Confidentialité du compte
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
