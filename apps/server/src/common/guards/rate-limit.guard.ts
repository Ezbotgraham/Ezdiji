export class RateLimitGuard {
  private requests = new Map<string, number>()

  canActivate(clientId: string) {
    const current = this.requests.get(clientId) || 0

    if (current > 100) {
      return false
    }

    this.requests.set(clientId, current + 1)

    setTimeout(() => {
      const latest = this.requests.get(clientId) || 1
      this.requests.set(clientId, latest - 1)
    }, 1000)

    return true
  }
}
