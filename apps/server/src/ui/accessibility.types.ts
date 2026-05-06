export interface AccessibilitySettings {
  reducedMotion: boolean
  highContrast: boolean
  largerText: boolean
  screenReaderSupport: boolean
  subtitleSupport: boolean
}

export const DEFAULT_ACCESSIBILITY_SETTINGS: AccessibilitySettings = {
  reducedMotion: false,
  highContrast: false,
  largerText: false,
  screenReaderSupport: true,
  subtitleSupport: true,
}
