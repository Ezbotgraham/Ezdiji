export interface MediaSession {
  id: string
  userId: string
  type: 'voice' | 'video' | 'stream'
  codec: string
  startedAt: number
  bitrate: number
  encrypted: boolean
}
