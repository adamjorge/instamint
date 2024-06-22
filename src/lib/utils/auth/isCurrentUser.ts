import { Session } from "next-auth"

export default function isCurrentUser(id: string, session: Session) {
  const { user } = session

  return user.id === id
}
