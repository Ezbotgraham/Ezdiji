export interface PerformanceSettings {
  lowResourceMode: boolean
  adaptiveBitrate: boolean
  adaptiveRendering: boolean
  hardwareAcceleration: boolean
  suspendInactiveModules: boolean
  batterySaver: boolean
  thermalProtection: boolean
}

export const DEFAULT_PERFORMANCE_SETTINGS: PerformanceSettings = {
  lowResourceMode: false,
  adaptiveBitrate: true,
  adaptiveRendering: true,
  hardwareAcceleration: true,
  suspendInactiveModules: true,
  batterySaver: false,
  thermalProtection: true,
}
