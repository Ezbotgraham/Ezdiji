export interface MobileNetworkState {
  connectionType: 'wifi' | '5g' | '4g' | '3g' | 'unknown'
  dataSaverEnabled: boolean
  reducedMediaQuality: boolean
  backgroundSyncLimited: boolean
}

export const DEFAULT_MOBILE_NETWORK: MobileNetworkState = {
  connectionType: 'unknown',
  dataSaverEnabled: false,
  reducedMediaQuality: false,
  backgroundSyncLimited: false,
}
