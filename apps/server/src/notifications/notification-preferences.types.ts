export interface NotificationPreferences {
  directMessages: boolean
  mentions: boolean
  voiceEvents: boolean
  streamEvents: boolean
  friendRequests: boolean
  desktopNotifications: boolean
  mobilePushNotifications: boolean
  soundEnabled: boolean
}

export const DEFAULT_NOTIFICATION_PREFERENCES: NotificationPreferences = {
  directMessages: true,
  mentions: true,
  voiceEvents: true,
  streamEvents: true,
  friendRequests: true,
  desktopNotifications: true,
  mobilePushNotifications: true,
  soundEnabled: true,
}
