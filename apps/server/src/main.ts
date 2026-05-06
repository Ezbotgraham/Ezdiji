import { NestFactory } from '@nestjs/core'
import { Module } from '@nestjs/common'

@Module({})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()

  await app.listen(3001)

  console.log('Ezdiji server running on :3001')
}

bootstrap()
