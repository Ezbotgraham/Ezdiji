export interface MessageSearchQuery {
  roomId?: string
  userId?: string
  keyword?: string
  fromDate?: number
  toDate?: number
  hasAttachment?: boolean
}
