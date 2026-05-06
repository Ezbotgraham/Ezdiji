export interface UploadChunk {
  uploadId: string
  chunkIndex: number
  totalChunks: number
  bufferSize: number
}

export interface UploadedFile {
  id: string
  filename: string
  mimeType: string
  size: number
  uploadedBy: string
  uploadedAt: number
}
