import { Body, Injectable, NestMiddleware, Request, Response } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

    use(@Request() req: any, @Response() res: any, next: () => void) {
        if (req.session.isAuthenticated) {
            console.log("Request is passing through Auth middleware!")
        }
        else {
            console.log("You are not authorized!!")
            res.json({
                msg: "You are not authorized!!"
            })
        }

    }
}