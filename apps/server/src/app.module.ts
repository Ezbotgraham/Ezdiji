import { Module } from '@nestjs/common'
import { Gateway } from './gateway/gateway'
import { AuthModule } from './auth/auth.module'
import { RoomsGateway } from './rooms/rooms.gateway'
import { VoiceGateway } from './voice/voice.gateway'
import { ScreenGateway } from './screen/screen.gateway'
import { RemoteGateway } from './remote/remote.gateway'

@Module({
  imports: [AuthModule],
  providers: [
    Gateway,
    RoomsGateway,
    VoiceGateway,
    ScreenGateway,
    RemoteGateway,
  ],
})
export class AppModule {}
