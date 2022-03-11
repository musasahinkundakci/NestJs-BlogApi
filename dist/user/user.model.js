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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDTO = exports.LoginDTO = exports.IdDTO = exports.UserSchema = void 0;
const mongoose = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
exports.UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    username: { type: String, required: true },
    age: { type: Number, min: 18, max: 65 },
    email: { type: String, required: true },
    password: { type: String, required: true }
});
class IdDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: "_id" }),
    __metadata("design:type", String)
], IdDTO.prototype, "_id", void 0);
exports.IdDTO = IdDTO;
class LoginDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: "username" }),
    __metadata("design:type", String)
], LoginDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: "password" }),
    __metadata("design:type", String)
], LoginDTO.prototype, "password", void 0);
exports.LoginDTO = LoginDTO;
class RegisterDTO extends LoginDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: "name" }),
    __metadata("design:type", String)
], RegisterDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: "surname" }),
    __metadata("design:type", String)
], RegisterDTO.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: "age" }),
    __metadata("design:type", Number)
], RegisterDTO.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, description: "userType" }),
    __metadata("design:type", Number)
], RegisterDTO.prototype, "userType", void 0);
exports.RegisterDTO = RegisterDTO;
//# sourceMappingURL=user.model.js.map