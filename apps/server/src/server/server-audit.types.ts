export interface ServerAuditEntry {
  id: string
  serverId: string
  action: string
  performedBy: string
  targetId?: string
  createdAt: number
}
