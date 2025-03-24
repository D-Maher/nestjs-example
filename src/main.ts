import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /**
   * Setup instructions: https://docs.nestjs.com/openapi/introduction
   */
  const config = new DocumentBuilder()
    .setTitle('NestJS example')
    .setDescription('This is a simple example of a NestJS API')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.disable('etag');

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
