import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'
import { corsConfig } from './config/cors.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors(corsConfig)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  )

  await app.listen(3001)

  console.log('Ezdiji server running on :3001')
}

bootstrap()
