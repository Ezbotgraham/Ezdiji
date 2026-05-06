export interface MediaCacheEntry {
  id: string
  type: 'image' | 'video' | 'audio'
  size: number
  cachedAt: number
  expiresAt: number
}
