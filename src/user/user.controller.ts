import { Controller, Get, Post, Body, Patch, Req, Res, Next } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiCreatedResponse, ApiResponse, ApiUnauthorizedResponse, ApiBody, ApiBearerAuth } from "@nestjs/swagger"
import { IdDTO, LoginDTO, RegisterDTO } from "./user.model";
const bcrpyt = require("bcrypt")
@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post("/register")
    @ApiBody({ type: RegisterDTO })
    @ApiCreatedResponse({
        description: "User Register EndPoint",

    })
    async PostUser(
        @Body("name") name: string,
        @Body("surname") surname: string,
        @Body("username") username: string,
        @Body("email") email: string,
        @Body("age") age: number,
        @Body("password") password: string
    ) {
        try {
            const user = await this.userService.getUserByEmail(email)
            if (!user) {
                const res = await this.userService.addUser(name, surname, username, age, email, password, 1)
                return {
                    msg: res
                }
            }
            else {
                return {
                    msg: "Email user already exists!"
                }
            }

        } catch (e) {
            return {
                msg: "Error occured!"
            }
        }

    }
    @Get("/logout")
    @ApiBearerAuth()
    @ApiCreatedResponse({
        description: "GET Logout EndPoint",

    })
    async getLogout(
        @Req() req: any,
        @Res() res: any,
        @Next() next: any,
    ) {
        console.log("Get Logout Endpoint!")
        req.session.destroy(function (err) {
            if (err) {
                console.log(err)
                res.json({ msg: "Couldnt Logout!" })
            } else {
                console.log("Logged out succesfully!")
                res.json({ msg: "Logged out succesfully!" })
            }
        })
    }
    @Get(":id")
    @ApiBearerAuth()//auth gerekli
    @ApiBody({ type: IdDTO })
    @ApiCreatedResponse({
        description: "GET User EndPoint",

    })
    async getUser(
        @Body("id") id: string
    ) {
        const res = await this.userService.getUserById(id)
        return res

    }
    @Post("/login")
    @ApiBearerAuth()
    @ApiCreatedResponse({
        description: "Login EndPoint",

    })
    @ApiUnauthorizedResponse({
        description: "Invalid Credentials!"
    })
    @ApiBody({ type: LoginDTO })
    async postLogin(
        @Req() req: any,
        @Res() res: any,
        @Next() next: any,
        @Body("username") username: string,
        @Body("password") password: string
    ) {

        try {
            this.userService.getSession(req.session)
            if (1) {
                console.log("try içine girdim")
                const user = await this.userService.getUserByUsername(username)
                if (user) {

                    console.log("req.save öncesi")
                    if (user.password === password) {
                        req.session.user = user;
                        req.session.isAuthenticated = true

                        await req.session.save(function (err) {
                            console.log("req save içindeyim")
                            if (err) {
                                console.log(err)
                                return {
                                    msg: "Something went wrong!"
                                }

                            }
                            console.log("Logged in")
                        })
                        res.json({
                            msg: "logged in"
                        })
                    }

                }
                else {
                    return {
                        msg: "There is not such user!"
                    }
                }
            }
        } catch (e) {
            return {
                msg: "Something went wrong"
            }
        }
    }
}