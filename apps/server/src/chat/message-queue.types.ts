export interface QueuedMessage {
  id: string
  roomId: string
  content: string
  retryCount: number
  failed: boolean
  createdAt: number
}
