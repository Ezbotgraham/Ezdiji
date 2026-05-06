import {
  SubscribeMessage,
  WebSocketGateway,
  ConnectedSocket,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets'

import { Server, Socket } from 'socket.io'

@WebSocketGateway()
export class VoiceGateway {
  @WebSocketServer()
  server: Server

  @SubscribeMessage('voice:join')
  handleVoiceJoin(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.join(`voice:${body.roomId}`)

    client.to(`voice:${body.roomId}`).emit('voice:user-joined', {
      userId: client.id,
    })
  }

  @SubscribeMessage('voice:signal')
  handleVoiceSignal(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.to(body.target).emit('voice:signal', {
      from: client.id,
      signal: body.signal,
    })
  }
}
