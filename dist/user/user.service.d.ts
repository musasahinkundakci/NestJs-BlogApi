import { Model } from "mongoose";
import { UserModel } from "./user.model";
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserModel>);
    addUser(name: string, surname: string, username: string, age: number, email: string, password: string, userType?: number): Promise<any>;
    getUserById(id: string): Promise<(UserModel & {
        _id: any;
    }) | "No user found!" | "Something went wrong!">;
    getSession(id: string): Promise<void>;
    getUserByEmail(email: string): Promise<(UserModel & {
        _id: any;
    }) | "Something went wrong">;
    getUserByUsername(username: string): Promise<UserModel & {
        _id: any;
    }>;
}
