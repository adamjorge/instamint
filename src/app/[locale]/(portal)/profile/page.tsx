import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
  return (
    <div className="h-screen border-r flex flex-col items-center w-1/6 mt-10 space-y-5">
      <div className="w-full space-y-5 flex flex-col items-center">
        <p className="text-medium text-sm">Comment vous utilisez Instamint</p>
        <>
          <Button className="bg-white text-black hover:bg-medium w-full">Modifier le profil</Button>
          <Button className="bg-white text-black hover:bg-medium w-full">Notifications</Button>
        </>
      </div>
      <Separator />
      <div className="w-full space-y-5 flex flex-col items-center">
        <p className="text-medium text-sm">Qui peut voir votre contenu</p>
        <>
          <div>
            <Button className="bg-white text-black hover:bg-medium w-full">
              Confidentialité du compte
            </Button>
          </div>
        </>
      </div>
    </div>
  )
}
