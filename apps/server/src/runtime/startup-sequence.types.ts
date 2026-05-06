export interface StartupSequenceState {
  configLoaded: boolean
  databaseInitialized: boolean
  websocketInitialized: boolean
  rtcInitialized: boolean
  startupSuccessful: boolean
}
