import { Button } from "@/components/ui/button"
import { UseMutationResult } from "@tanstack/react-query"
import { useCallback } from "react"

export default function MinterActionsButton(props: MinterActionsButtonProps) {
  const { minterid, mutation, text } = props
  const handleClick = useCallback(
    (minterId: string) => {
      mutation.mutate(minterId)
    },
    [mutation]
  )

  return (
    <Button
      className="bg-red-600"
      onClick={() => {
        handleClick(minterid)
      }}
    >
      {text}
    </Button>
  )
}

type MinterActionsButtonProps = {
  minterid: string
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-arguments
  mutation: UseMutationResult<unknown, Error, string, unknown>
  text: string
}
