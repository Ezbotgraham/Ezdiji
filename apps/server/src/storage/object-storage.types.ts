export interface ObjectStorageProvider {
  provider: 's3' | 'minio' | 'local'
  bucket: string
  region?: string
  publicUrl?: string
}
