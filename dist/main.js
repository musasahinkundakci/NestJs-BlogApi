"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
const mongoDbStore = require("connect-mongodb-session")(session);
require("dotenv").config();
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const store = new mongoDbStore({
        uri: "mongodb+srv://phonenumber:qwerttr123@cluster0.teh4c.mongodb.net/nestJs?retryWrites=true&w=majority",
        collection: "Sessions",
    });
    app.use(session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 3600000,
        },
        store,
    }));
    const options = new swagger_1.DocumentBuilder().setTitle("Blog API").setDescription("Blog Api description").setVersion("1.0.0").addBearerAuth({ type: "http", scheme: "bearer", bearerFormat: "Token" }, "access-token").build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup("api", app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map