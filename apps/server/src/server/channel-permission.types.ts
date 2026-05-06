export interface ChannelPermissionOverride {
  roleId?: string
  userId?: string
  allow: string[]
  deny: string[]
}
