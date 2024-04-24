import SignInWrapper from "@/components/custom/sign-in/sign-in-wrapper"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Arvo } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

// eslint-disable-next-line new-cap
const kanit = Arvo({ subsets: ["latin"], weight: "700" })

export default function SignInCard() {
  return (
    <Card className="p-10 space-y-5">
      <CardHeader>
        <CardTitle className="flex space-x-5 items-center justify-center">
          <Image
            src="/instamint.svg"
            alt="Instamint Logo"
            className="dark:invert"
            width={60}
            height={25}
            priority
          />
          <span className={kanit.className}>Instamint</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SignInWrapper />
      </CardContent>
      <CardFooter className="flex flex-col space-y-8">
        <div className="flex flex-col items-center text-sm">
          <p>Don't have an account?</p>
          <Link href="" className="text-blue-500">
            Sign up
          </Link>
        </div>
        <p className="text-center text-sm text-gray-500">
          &copy; 2024 Instamint. All rights reserved.
        </p>
      </CardFooter>
    </Card>
  )
}
