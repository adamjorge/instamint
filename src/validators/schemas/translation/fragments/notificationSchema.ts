import { z } from "zod"

export const notificationSchema = z.object({
  COMMENT_REPLY: z.string(),
  COMMENT_ON_POST: z.string(),
  MENTION_IN_COMMENT: z.string(),
  LIKE: z.string(),
  NEW_FOLLOWER: z.string(),
  FOLLOW_REQUEST: z.string(),
  FOLLOW_REQUEST_ACCEPTED: z.string()
})
