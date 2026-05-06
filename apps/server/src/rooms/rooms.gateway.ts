import {
  SubscribeMessage,
  WebSocketGateway,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets'

import { Socket } from 'socket.io'

@WebSocketGateway()
export class RoomsGateway {
  @SubscribeMessage('room:join')
  handleJoin(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.join(body.roomId)

    return {
      joined: true,
      roomId: body.roomId,
    }
  }

  @SubscribeMessage('room:leave')
  handleLeave(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.leave(body.roomId)

    return {
      left: true,
      roomId: body.roomId,
    }
  }
}
