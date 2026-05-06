export class VoiceStore {
  private rooms = new Map<string, Set<string>>()

  join(roomId: string, userId: string) {
    const users = this.rooms.get(roomId) || new Set<string>()

    users.add(userId)

    this.rooms.set(roomId, users)
  }

  leave(roomId: string, userId: string) {
    const users = this.rooms.get(roomId)

    if (!users) return

    users.delete(userId)

    if (users.size === 0) {
      this.rooms.delete(roomId)
    }
  }

  getUsers(roomId: string) {
    return Array.from(this.rooms.get(roomId) || [])
  }
}
