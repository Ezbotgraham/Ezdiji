export interface Session {
  sessionId: string
  userId: string
  createdAt: number
  lastSeenAt: number
  ipAddress?: string
  deviceName?: string
}

export class SessionStore {
  private sessions = new Map<string, Session[]>()

  addSession(session: Session) {
    const current = this.sessions.get(session.userId) || []

    const filtered = current.filter(
      (item) => item.sessionId !== session.sessionId,
    )

    filtered.push(session)

    this.sessions.set(session.userId, filtered)
  }

  removeSession(userId: string, sessionId: string) {
    const current = this.sessions.get(userId) || []

    this.sessions.set(
      userId,
      current.filter((item) => item.sessionId !== sessionId),
    )
  }

  getSessions(userId: string) {
    return this.sessions.get(userId) || []
  }
}
