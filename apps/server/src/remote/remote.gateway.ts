import {
  SubscribeMessage,
  WebSocketGateway,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets'

import { Socket } from 'socket.io'

@WebSocketGateway()
export class RemoteGateway {
  @SubscribeMessage('remote:mouse')
  handleMouseEvent(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.to(body.target).emit('remote:mouse', {
      x: body.x,
      y: body.y,
      type: body.type,
    })
  }

  @SubscribeMessage('remote:keyboard')
  handleKeyboardEvent(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: any,
  ) {
    client.to(body.target).emit('remote:keyboard', {
      key: body.key,
      state: body.state,
    })
  }
}
