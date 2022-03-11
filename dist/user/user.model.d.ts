import * as mongoose from "mongoose";
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
export interface UserModel extends mongoose.Document {
    name: string;
    surname: string;
    username: string;
    age: number;
    email: string;
    password: string;
    userType: number;
}
export declare class IdDTO {
    _id: string;
}
export declare class LoginDTO {
    email: string;
    password: string;
}
export declare class RegisterDTO extends LoginDTO {
    name: string;
    surname: string;
    age: number;
    userType: number;
}
