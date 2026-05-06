export type Permission =
  | 'chat.send'
  | 'chat.delete'
  | 'voice.join'
  | 'voice.speak'
  | 'screen.share'
  | 'remote.control'
  | 'room.manage'
  | 'user.manage'
  | 'event.manage'

export interface RolePermissions {
  role: string
  permissions: Permission[]
}
