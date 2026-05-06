export class ReconnectStore {
  private reconnects = new Map<string, number>()

  markReconnect(userId: string) {
    this.reconnects.set(userId, Date.now())
  }

  getReconnectTime(userId: string) {
    return this.reconnects.get(userId)
  }

  clearReconnect(userId: string) {
    this.reconnects.delete(userId)
  }
}
