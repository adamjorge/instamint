import LinkButton from "@/components/ui/custom/link-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function ResetPasswordPage() {
  return (
    <div className="w-full flex justify-center mt-32">
      <div className="flex flex-col items-center space-y-6 w-2/3 xl:w-1/2">
        <Image
          src="/instamint.svg"
          alt="Instamint Logo"
          className="dark:invert"
          width={60}
          height={25}
          priority
        />
        <h2 className="font-bold text-2xl">Change your password</h2>
        <div className="w-full flex flex-col space-y-2">
          <Label htmlFor="password">New password</Label>
          <Input type="password" />
        </div>
        <div className="w-full flex flex-col space-y-2">
          <Label htmlFor="password-confirmation">Confirm new password</Label>
          <Input type="password" />
        </div>
        <LinkButton withLocale href="/" className="w-full bg-sea hover:bg-spruce">
          Change my password
        </LinkButton>
      </div>
    </div>
  )
}
