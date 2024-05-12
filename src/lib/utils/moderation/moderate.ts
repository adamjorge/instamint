import badWords from "@/lib/utils/moderation/bad-words"
import Filter from "bad-words"

const moderation = new Filter()

badWords.forEach((word) => {
  moderation.addWords(word)
})

export default moderation
