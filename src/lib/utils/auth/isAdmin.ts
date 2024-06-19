import { Session } from "next-auth"

export default function isAdmin(session: Session) {
  return session.user.isAdmin
}
