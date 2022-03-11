import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose"
import { UserModel } from "./user.model";
@Injectable()
export class UserService {
    constructor(@InjectModel("User") private readonly userModel: Model<UserModel>) {

    }
    async addUser(name: string, surname: string, username: string, age: number, email: string, password: string, userType: number = 1) {
        const user = new this.userModel({ name, surname, username, age, email, password, userType })
        try {
            const res = await user.save()
            return res
        } catch (e) {
            return e
        }

    }
    async getUserById(id: string) {
        try {
            const user = await this.userModel.findById(id)
            if (user)
                return user
            else
                return "No user found!"
        }
        catch (err) {
            return "Something went wrong!"
        }
    }
    async getSession(id: string) {

    }
    async getUserByEmail(email: string) {
        try {
            const user = await this.userModel.findOne({
                email
            })
            if (user) {
                return user
            }
            else
                return null
        } catch (err) {
            return "Something went wrong"
        }
    }
    async getUserByUsername(username: string) {
        try {
            const user = await this.userModel.findOne({
                username: username
            })
            if (user) {
                return user
            }
            else
                return null
        } catch (err) {
            return null
        }
    }
}