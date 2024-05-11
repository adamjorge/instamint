import { PiSpinnerGap } from "react-icons/pi"

export default function Spinner() {
  return (
    <div className="flex w-full justify-center mt-10">
      <PiSpinnerGap className="animate-spin" size={30} />
    </div>
  )
}
