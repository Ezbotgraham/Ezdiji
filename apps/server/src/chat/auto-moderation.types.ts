export interface AutoModerationSettings {
  antiSpam: boolean
  antiFlood: boolean
  antiRaid: boolean
  blockedWordsEnabled: boolean
  excessiveMentionProtection: boolean
}

export const DEFAULT_AUTO_MODERATION: AutoModerationSettings = {
  antiSpam: true,
  antiFlood: true,
  antiRaid: true,
  blockedWordsEnabled: false,
  excessiveMentionProtection: true,
}
