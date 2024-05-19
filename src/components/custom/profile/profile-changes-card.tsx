import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useTranslations } from "next-intl"

export default function ProfileChangesCard(props: ProfileChangesProps) {
  const { handleClickOnDelete, handleClickOnChange } = props
  const t = useTranslations("profileChanges")

  return (
    <div className="flex flex-col items-center ml-5 mr-5 mt-10 space-y-5 w-full">
      <h2 className="font-bold text-xl">{t("changeProfile")}</h2>
      <Avatar>
        <AvatarFallback>IN</AvatarFallback>
      </Avatar>
      <div className="self-stretch mr-3">
        <Label htmlFor="bio" className="font-bold text-lg">
          {t("bio")}
        </Label>
        <Textarea className="mt-3" placeholder={t("bioWIP")} disabled />
      </div>
      <Dialog>
        <DialogTrigger className="bg-red-500 text-white hover:bg-dark p-2 rounded-lg border">
          {t("deleteAccount")}
        </DialogTrigger>
        <DialogContent className="rounded-lg">
          <DialogHeader>
            <DialogTitle>{t("deleteAccountConfirmation")}</DialogTitle>
            <DialogDescription>{t("deleteAccountDescription")}</DialogDescription>
          </DialogHeader>
          <Button className="bg-red-500 text-white hover:bg-medium" onClick={handleClickOnDelete}>
            {t("deleteAccount")}
          </Button>
        </DialogContent>
      </Dialog>
      <Button className="bg-sea text-white hover:bg-spruce text-md" onClick={handleClickOnChange}>
        Change my password
      </Button>
    </div>
  )
}

type ProfileChangesProps = {
  handleClickOnDelete: () => void
  handleClickOnChange: () => void
}
