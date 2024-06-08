import { z } from "zod"

/* eslint-disable camelcase */
export const notificationSchema = z.object({
  comment_reply: z.string(),
  comment_on_post: z.string(),
  mention_in_comment: z.string(),
  like: z.string(),
  new_follower: z.string(),
  follow_request: z.string(),
  follow_request_accepted: z.string()
})
/* eslint-enable camelcase */
