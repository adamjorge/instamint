import { Textarea } from "@/components/ui/textarea"
import { maxCommentLength } from "@/constants/maxCommentLength"
import { ChangeEvent } from "react"

export default function AddCommentTextarea({
  value,
  onChange,
  placeholder,
  count
}: AddCommentTextareaProps) {
  return (
    <div>
      <Textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input input-bordered w-full"
        maxLength={maxCommentLength}
      />
      <p className="text-sm text-muted-foreground mt-2">
        {count}/{maxCommentLength}
      </p>
      <p className="text-sm text-muted-foreground mt-2">
        You can @mention other users and organizations.
      </p>
    </div>
  )
}

type AddCommentTextareaProps = {
  value: string
  count: number
  placeholder: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
