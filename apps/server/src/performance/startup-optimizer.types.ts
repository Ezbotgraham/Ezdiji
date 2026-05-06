export interface StartupOptimizerState {
  lazyLoadModules: boolean
  deferHeavyInitialization: boolean
  preloadCriticalRoutes: boolean
  backgroundWarmup: boolean
}

export const DEFAULT_STARTUP_OPTIMIZER: StartupOptimizerState = {
  lazyLoadModules: true,
  deferHeavyInitialization: true,
  preloadCriticalRoutes: true,
  backgroundWarmup: true,
}
