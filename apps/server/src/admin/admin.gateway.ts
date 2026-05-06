import {
  SubscribeMessage,
  WebSocketGateway,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets'

import { Socket } from 'socket.io'

@WebSocketGateway()
export class AdminGateway {
  @SubscribeMessage('admin:room-lock')
  handleRoomLock(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.broadcast.emit('room:locked', {
      roomId: body.roomId,
    })
  }

  @SubscribeMessage('admin:room-unlock')
  handleRoomUnlock(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.broadcast.emit('room:unlocked', {
      roomId: body.roomId,
    })
  }

  @SubscribeMessage('admin:event-create')
  handleEventCreate(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.broadcast.emit('event:created', {
      title: body.title,
      description: body.description,
      startsAt: body.startsAt,
    })
  }
}
