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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_model_1 = require("./models/user.model");
const mongoose_2 = require("mongoose");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const mongodb_1 = require("mongodb");
const user_roles_1 = require("../utility/user-roles");
let UserService = exports.UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        const userExist = await this.userModel.findOne({ email: createUserDto.email });
        if (userExist)
            throw new common_1.BadRequestException('User exists.');
        createUserDto.password = await (0, bcrypt_1.hash)(createUserDto.password, 10);
        const user = await this.userModel.create(createUserDto);
        return user;
    }
    async signin(signInDto) {
        const user = await this.userModel.findOne({ email: signInDto.email })
            .select('+password').lean();
        if (!user)
            throw new common_1.UnauthorizedException('Bad credentials.');
        const passwordMatched = await (0, bcrypt_1.compare)(signInDto.password, user.password);
        if (!passwordMatched)
            throw new common_1.UnauthorizedException('Bad credentials.');
        return user;
    }
    async generateToken(user) {
        return (0, jsonwebtoken_1.sign)({
            _id: user._id, email: user.email
        }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRE_TIME });
    }
    async findAll() {
        return await this.userModel.find();
    }
    async findOne(id) {
        const user = await this.userModel.findById(id);
        if (!user)
            throw new common_1.NotFoundException('user not found.');
        return user;
    }
    async updateRoles(updateUserRolesDto) {
        const user = await this.userModel.findById(new mongodb_1.ObjectId(updateUserRolesDto.id));
        if (!user)
            throw new common_1.NotFoundException('User not found.');
        user.roles = updateUserRolesDto.roles;
        return await user.save();
    }
    async getAuthors() {
        return await this.userModel.find({ roles: user_roles_1.UserRoles.Author }).select('_id name avatar');
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
    async findOneForMiddleware(_id) {
        return await this.userModel.findById(_id);
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map