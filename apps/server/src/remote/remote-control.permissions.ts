export interface RemoteControlPermissions {
  allowMouseControl: boolean
  allowKeyboardControl: boolean
  allowClipboardSync: boolean
  allowFileTransfer: boolean
  requireApproval: boolean
}

export const DEFAULT_REMOTE_PERMISSIONS: RemoteControlPermissions = {
  allowMouseControl: true,
  allowKeyboardControl: true,
  allowClipboardSync: true,
  allowFileTransfer: true,
  requireApproval: true,
}
