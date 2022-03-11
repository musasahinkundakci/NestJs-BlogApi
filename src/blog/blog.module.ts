import { MiddlewareConsumer, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LoggerMiddleware } from "src/middlewares/logger.middleware";

import { BlogController } from "./blog.controller";
import { BlogSchema } from "./blog.model";
import { BlogService } from "./blog.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: "Blog", schema: BlogSchema }])],
    providers: [BlogService],
    controllers: [BlogController]
})
export class BlogModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes(BlogController)
    }
}