export interface ChatMessage {
  id: string
  channelId: string
  authorId: string
  content: string
  createdAt: number
  edited: boolean
}
