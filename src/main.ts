import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = app.get("ConfigService").get("PORT");
  console.log("running at:", port);
  await app.listen(port);
}
bootstrap();
