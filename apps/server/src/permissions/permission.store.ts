import { RolePermissions } from './permission.types'

export const ROLE_PERMISSIONS: RolePermissions[] = [
  {
    role: 'admin',
    permissions: [
      'chat.send',
      'chat.delete',
      'voice.join',
      'voice.speak',
      'screen.share',
      'remote.control',
      'room.manage',
      'user.manage',
      'event.manage',
    ],
  },
  {
    role: 'user',
    permissions: [
      'chat.send',
      'voice.join',
      'voice.speak',
      'screen.share',
    ],
  },
]
