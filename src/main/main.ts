import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
