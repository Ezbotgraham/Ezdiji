export interface AutoUpdateState {
  enabled: boolean
  automaticDownload: boolean
  automaticInstall: boolean
  currentVersion: string
  availableVersion?: string
}
