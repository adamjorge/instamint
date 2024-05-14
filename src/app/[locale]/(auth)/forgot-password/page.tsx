import LinkButton from "@/components/ui/custom/link-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function ForgotPasswordPage() {
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
        <h2 className="font-bold text-2xl">Forgot your password?</h2>
        <p>
          Enter the email address associated with your account, and we'll send you a link to reset
          your password.
        </p>
        <div className="w-full flex flex-col space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="you@email.com" />
        </div>
        <LinkButton withLocale href="/" className="w-full bg-sea hover:bg-spruce">
          Send reset link
        </LinkButton>
        <LinkButton withLocale href="/login" className="w-full text-sea bg-white hover:bg-white">
          Back to sign in
        </LinkButton>
      </div>
    </div>
  )
}
