export interface UploadChunk {
  uploadId: string
  chunkIndex: number
  totalChunks: number
  size: number
  uploaded: boolean
}
