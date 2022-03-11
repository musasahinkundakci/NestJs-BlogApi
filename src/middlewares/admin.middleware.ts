import { Injectable, NestMiddleware, Request, Response } from "@nestjs/common";

@Injectable()
export class AdminMiddleware implements NestMiddleware {
    use(@Request() req: any, @Response() res: any, next: () => void) {

    }
}