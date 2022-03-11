import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    PostUser(name: string, surname: string, username: string, email: string, age: number, password: string): Promise<{
        msg: any;
    }>;
    getLogout(req: any, res: any, next: any): Promise<void>;
    getUser(id: string): Promise<(import("./user.model").UserModel & {
        _id: any;
    }) | "No user found!" | "Something went wrong!">;
    postLogin(req: any, res: any, next: any, username: string, password: string): Promise<{
        msg: string;
    }>;
}
