export interface CacheEntry<T> {
  value: T
  expiresAt: number
}

export class CacheManager {
  private cache = new Map<string, CacheEntry<any>>()

  set<T>(key: string, value: T, ttl = 60000) {
    this.cache.set(key, {
      value,
      expiresAt: Date.now() + ttl,
    })
  }

  get<T>(key: string): T | null {
    const entry = this.cache.get(key)

    if (!entry) {
      return null
    }

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key)
      return null
    }

    return entry.value
  }

  delete(key: string) {
    this.cache.delete(key)
  }
}
