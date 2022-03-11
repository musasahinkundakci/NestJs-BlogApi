import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const session = require("express-session");
const mongoDbStore = require("connect-mongodb-session")(session);
require("dotenv").config();
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const store = new mongoDbStore({
    uri: "mongodb+srv://phonenumber:qwerttr123@cluster0.teh4c.mongodb.net/nestJs?retryWrites=true&w=majority",
    collection: "Sessions",
  });
  app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000,
      },
      store,
    })
  );
  const options = new DocumentBuilder().setTitle("Blog API").setDescription("Blog Api description").setVersion("1.0.0").addBearerAuth(
    { type: "http", scheme: "bearer", bearerFormat: "Token" }, "access-token",
  ).build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup("api", app, document)
  await app.listen(3000);
}
bootstrap();
