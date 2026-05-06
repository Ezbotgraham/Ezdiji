export interface AppLifecycleState {
  initialized: boolean
  environmentLoaded: boolean
  servicesStarted: boolean
  startupCompletedAt?: number
}
