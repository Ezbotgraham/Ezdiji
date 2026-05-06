export interface PrismaStatus {
  initialized: boolean
  migrationsApplied: boolean
  connectionPoolReady: boolean
  lastMigrationAt?: number
}
