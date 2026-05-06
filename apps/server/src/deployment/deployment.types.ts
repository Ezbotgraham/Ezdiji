export interface DeploymentEnvironment {
  environment: 'development' | 'staging' | 'production'
  clusterEnabled: boolean
  monitoringEnabled: boolean
  cdnEnabled: boolean
  backupsEnabled: boolean
}
