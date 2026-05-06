import {
  SubscribeMessage,
  WebSocketGateway,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets'

import { Socket } from 'socket.io'

@WebSocketGateway()
export class ScreenGateway {
  @SubscribeMessage('screen:start')
  handleScreenStart(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.to(body.roomId).emit('screen:started', {
      userId: client.id,
      roomId: body.roomId,
    })
  }

  @SubscribeMessage('screen:signal')
  handleScreenSignal(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.to(body.target).emit('screen:signal', {
      from: client.id,
      signal: body.signal,
    })
  }

  @SubscribeMessage('screen:stop')
  handleScreenStop(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.to(body.roomId).emit('screen:stopped', {
      userId: client.id,
    })
  }
}
