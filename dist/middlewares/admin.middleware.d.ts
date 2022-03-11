import { NestMiddleware } from "@nestjs/common";
export declare class AdminMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
