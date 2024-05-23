import Contact from "@/components/custom/profile/profile-privacy-policy/contact"
import Cookies from "@/components/custom/profile/profile-privacy-policy/cookies"
import Data from "@/components/custom/profile/profile-privacy-policy/data"
import Intro from "@/components/custom/profile/profile-privacy-policy/intro"
import Marketing from "@/components/custom/profile/profile-privacy-policy/marketing"
import Rights from "@/components/custom/profile/profile-privacy-policy/rights"

export default function ProfilePrivacyPolicy() {
  return (
    <div className="w-full ml-12 space-y-5">
      <Intro />
      <Data />
      <Marketing />
      <Rights />
      <Cookies />
      <Contact />
    </div>
  )
}
