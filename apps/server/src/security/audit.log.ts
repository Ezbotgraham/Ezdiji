export interface AuditLogEntry {
  id: string
  userId: string
  action: string
  targetId?: string
  createdAt: number
  metadata?: Record<string, any>
}
