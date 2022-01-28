import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // VALIDATION
  app.useGlobalPipes(new ValidationPipe());

  // SWAGGER
  const config = new DocumentBuilder()
    .setTitle('MoonWalker API')
    .setDescription('MoonWalker API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // TO ALLOW LOCALHOST REQUEST IN DEV ENV
  app.enableCors();
  // RUN APP
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
