export interface MessageRetentionSettings {
  autoDeleteEnabled: boolean
  retentionDays?: number
  archiveOldMessages: boolean
}

export const DEFAULT_MESSAGE_RETENTION: MessageRetentionSettings = {
  autoDeleteEnabled: false,
  archiveOldMessages: true,
}
