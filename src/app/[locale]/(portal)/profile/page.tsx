import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
  return (
    <div className="h-screen flex mt-10 items-baseline">
      <div className="space-y-5 pr-5 border-r">
        <div className="w-full space-y-5 flex flex-col items-center">
          <p className="text-medium text-sm">Comment utiliser Instamint</p>
          <>
            <Button className="bg-white text-black hover:bg-medium w-full">
              Modifier le profil
            </Button>
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

      <div className="flex flex-col justify-center items-center w-full">
        <h2>Modifier le profil</h2>
        <Button className="bg-red-500 text-white hover:bg-medium mt-5">Delete your account</Button>
      </div>
    </div>
  )
}
