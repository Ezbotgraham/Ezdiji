export interface TrayMenuItem {
  id: string
  label: string
  action: string
  enabled: boolean
}

export interface DesktopTrayState {
  enabled: boolean
  minimizeToTray: boolean
  launchOnStartup: boolean
  menuItems: TrayMenuItem[]
}
