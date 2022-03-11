"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const swagger_1 = require("@nestjs/swagger");
const user_model_1 = require("./user.model");
const bcrpyt = require("bcrypt");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async PostUser(name, surname, username, email, age, password) {
        try {
            const user = await this.userService.getUserByEmail(email);
            if (!user) {
                const res = await this.userService.addUser(name, surname, username, age, email, password, 1);
                return {
                    msg: res
                };
            }
            else {
                return {
                    msg: "Email user already exists!"
                };
            }
        }
        catch (e) {
            return {
                msg: "Error occured!"
            };
        }
    }
    async getLogout(req, res, next) {
        console.log("Get Logout Endpoint!");
        req.session.destroy(function (err) {
            if (err) {
                console.log(err);
                res.json({ msg: "Couldnt Logout!" });
            }
            else {
                console.log("Logged out succesfully!");
                res.json({ msg: "Logged out succesfully!" });
            }
        });
    }
    async getUser(id) {
        const res = await this.userService.getUserById(id);
        return res;
    }
    async postLogin(req, res, next, username, password) {
        try {
            this.userService.getSession(req.session);
            if (1) {
                console.log("try içine girdim");
                const user = await this.userService.getUserByUsername(username);
                if (user) {
                    console.log("req.save öncesi");
                    if (user.password === password) {
                        req.session.user = user;
                        req.session.isAuthenticated = true;
                        await req.session.save(function (err) {
                            console.log("req save içindeyim");
                            if (err) {
                                console.log(err);
                                return {
                                    msg: "Something went wrong!"
                                };
                            }
                            console.log("Logged in");
                        });
                        res.json({
                            msg: "logged in"
                        });
                    }
                }
                else {
                    return {
                        msg: "There is not such user!"
                    };
                }
            }
        }
        catch (e) {
            return {
                msg: "Something went wrong"
            };
        }
    }
};
__decorate([
    (0, common_1.Post)("/register"),
    (0, swagger_1.ApiBody)({ type: user_model_1.RegisterDTO }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "User Register EndPoint",
    }),
    __param(0, (0, common_1.Body)("name")),
    __param(1, (0, common_1.Body)("surname")),
    __param(2, (0, common_1.Body)("username")),
    __param(3, (0, common_1.Body)("email")),
    __param(4, (0, common_1.Body)("age")),
    __param(5, (0, common_1.Body)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "PostUser", null);
__decorate([
    (0, common_1.Get)("/logout"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({
        description: "GET Logout EndPoint",
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Next)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getLogout", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({ type: user_model_1.IdDTO }),
    (0, swagger_1.ApiCreatedResponse)({
        description: "GET User EndPoint",
    }),
    __param(0, (0, common_1.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)("/login"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Login EndPoint",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "Invalid Credentials!"
    }),
    (0, swagger_1.ApiBody)({ type: user_model_1.LoginDTO }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Next)()),
    __param(3, (0, common_1.Body)("username")),
    __param(4, (0, common_1.Body)("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "postLogin", null);
UserController = __decorate([
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map