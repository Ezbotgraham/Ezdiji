export interface UILayoutState {
  compactSidebar: boolean
  detachablePanels: boolean
  rememberLayout: boolean
  multiMonitorSupport: boolean
}

export const DEFAULT_UI_LAYOUT: UILayoutState = {
  compactSidebar: false,
  detachablePanels: false,
  rememberLayout: true,
  multiMonitorSupport: true,
}
