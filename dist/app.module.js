"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const blog_controller_1 = require("./blog/blog.controller");
const blog_module_1 = require("./blog/blog.module");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const user_module_1 = require("./user/user.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes(blog_controller_1.BlogController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [blog_module_1.BlogModule, user_module_1.UserModule, mongoose_1.MongooseModule.forRoot("mongodb+srv://phonenumber:qwerttr123@cluster0.teh4c.mongodb.net/nestJs?retryWrites=true&w=majority")],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map