import * as mongoose from "mongoose"
import { ApiProperty } from "@nestjs/swagger"
export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    username: { type: String, required: true },
    age: { type: Number, min: 18, max: 65 },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

export interface UserModel extends mongoose.Document {

    name: string
    surname: string
    username: string
    age: number
    email: string
    password: string
    userType: number
}
export class IdDTO {
    @ApiProperty({ type: String, description: "_id" })
    _id: string
}
export class LoginDTO {
    @ApiProperty({ type: String, description: "username" })
    email: string
    @ApiProperty({ type: String, description: "password" })
    password: string
}
export class RegisterDTO extends LoginDTO {
    @ApiProperty({ type: String, description: "name" })
    name: string
    @ApiProperty({ type: String, description: "surname" })
    surname: string
    @ApiProperty({ type: Number, description: "age" })
    age: number
    @ApiProperty({ type: Number, description: "userType" })
    userType: number
}