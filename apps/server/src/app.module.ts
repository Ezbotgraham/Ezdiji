import { Module } from '@nestjs/common'
import { Gateway } from './gateway/gateway'
import { AuthModule } from './auth/auth.module'
import { RoomsGateway } from './rooms/rooms.gateway'

@Module({
  imports: [AuthModule],
  providers: [Gateway, RoomsGateway],
})
export class AppModule {}
