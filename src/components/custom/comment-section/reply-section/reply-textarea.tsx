import { Textarea } from "@/components/ui/textarea"
import { ChangeEvent } from "react"

export default function ReplyTextArea({ value, onChange }: ReplyInputProps) {
  const maxReplyLength = 300
  let textAreaCount = value.length
  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e)
    textAreaCount = e.target.value.length
  }

  return (
    <div>
      <Textarea
        value={value}
        onChange={handleTextAreaChange}
        placeholder="Reply..."
        className="input input-bordered w-full"
        maxLength={maxReplyLength}
      />
      <p className="text-sm text-muted-foreground mt-2">
        {textAreaCount}/{maxReplyLength}
      </p>
      <p className="text-sm text-muted-foreground mt-2">
        You can @mention other users and organizations.
      </p>
    </div>
  )
}

type ReplyInputProps = {
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
