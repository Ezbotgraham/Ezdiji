export interface MobileSyncState {
  backgroundMode: boolean
  reducedBandwidth: boolean
  batterySaver: boolean
  syncIntervalMs: number
}

export const DEFAULT_MOBILE_SYNC: MobileSyncState = {
  backgroundMode: true,
  reducedBandwidth: true,
  batterySaver: true,
  syncIntervalMs: 15000,
}
