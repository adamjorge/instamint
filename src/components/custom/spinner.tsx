import { clsx } from "clsx"
import { PiSpinnerGap } from "react-icons/pi"

export default function Spinner({ className, ...props }: SpinnerProps) {
  return (
    <div className={clsx("flex w-full justify-center mt-10", { className })} {...props}>
      <PiSpinnerGap className="animate-spin" size={30} />
    </div>
  )
}

type SpinnerProps = {
  className?: string
}
