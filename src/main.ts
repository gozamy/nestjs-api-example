import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const continentsOptions = new DocumentBuilder()
    .setTitle('Sport Monks API for Football apps')
    .setDescription('Shows all end points for Sport Monks')
    .setVersion('3.0.2')
    .addTag('Continents')
    .addTag('Countries')
    .addTag('Fixtures')
    .addTag('Leagues')
    .addTag('Seasons')
    .addTag('Team Squad')
    .addTag('Team By Id')
    .build();

  const continentsDocument = SwaggerModule.createDocument(app, continentsOptions);
  SwaggerModule.setup('api', app, continentsDocument);

  await app.listen(3000);
}
bootstrap();
