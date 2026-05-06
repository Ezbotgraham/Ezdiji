import {
  SubscribeMessage,
  WebSocketGateway,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets'

import { Socket } from 'socket.io'

@WebSocketGateway()
export class SoundpadGateway {
  @SubscribeMessage('soundpad:play')
  handlePlay(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.to(body.roomId).emit('soundpad:playing', {
      userId: client.id,
      soundId: body.soundId,
      volume: body.volume,
    })
  }

  @SubscribeMessage('soundpad:stop')
  handleStop(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.to(body.roomId).emit('soundpad:stopped', {
      userId: client.id,
      soundId: body.soundId,
    })
  }
}
