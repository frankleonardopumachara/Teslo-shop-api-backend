import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";
import { TransformInterceptor } from "./common/transform.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);

  // app.useGlobalInterceptors(new TransformInterceptor())

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }));

  app.enableCors()

  await app.listen(config.get<number>("SERVER_PORT"));
}

bootstrap();
