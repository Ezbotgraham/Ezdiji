export class PresenceStore {
  private users = new Map<string, Set<string>>()

  connect(userId: string, socketId: string) {
    const sockets = this.users.get(userId) || new Set<string>()

    sockets.add(socketId)

    this.users.set(userId, sockets)
  }

  disconnect(userId: string, socketId: string) {
    const sockets = this.users.get(userId)

    if (!sockets) return

    sockets.delete(socketId)

    if (sockets.size === 0) {
      this.users.delete(userId)
    }
  }

  getOnlineUsers() {
    return Array.from(this.users.keys())
  }

  isOnline(userId: string) {
    return this.users.has(userId)
  }
}
