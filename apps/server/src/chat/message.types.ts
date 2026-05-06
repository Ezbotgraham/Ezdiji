export type AttachmentType =
  | 'image'
  | 'gif'
  | 'video'
  | 'file'
  | 'audio'

export interface Attachment {
  id: string
  type: AttachmentType
  url: string
  filename: string
  size: number
}

export interface ChatMessage {
  id: string
  userId: string
  roomId: string
  content: string
  attachments: Attachment[]
  createdAt: number
}
