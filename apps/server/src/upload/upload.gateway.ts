import {
  SubscribeMessage,
  WebSocketGateway,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets'

import { Socket } from 'socket.io'

@WebSocketGateway()
export class UploadGateway {
  @SubscribeMessage('upload:start')
  handleUploadStart(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.emit('upload:ready', {
      uploadId: crypto.randomUUID(),
      chunkSize: 1024 * 256,
    })
  }

  @SubscribeMessage('upload:chunk')
  handleUploadChunk(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.emit('upload:progress', {
      uploadId: body.uploadId,
      chunkIndex: body.chunkIndex,
    })
  }

  @SubscribeMessage('upload:finish')
  handleUploadFinish(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.emit('upload:completed', {
      uploadId: body.uploadId,
      success: true,
    })
  }
}
