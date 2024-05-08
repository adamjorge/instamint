import { Button } from "@/components/ui/button"
import { ReplyButtonContentType } from "@/validators/types/replyButtonContentType"

export default function ReplyButton({ content, onClick }: ReplyButtonProps) {
  return (
    <Button size="sm" variant="default" onClick={onClick}>
      {content}
    </Button>
  )
}

type ReplyButtonProps = {
  content: ReplyButtonContentType
  onClick: () => void
}
