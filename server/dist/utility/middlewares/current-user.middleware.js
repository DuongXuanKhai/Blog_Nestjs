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
exports.CurrentUserMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const user_service_1 = require("../../user/user.service");
const mongodb_1 = require("mongodb");
let CurrentUserMiddleware = exports.CurrentUserMiddleware = class CurrentUserMiddleware {
    constructor(userService) {
        this.userService = userService;
    }
    async use(req, res, next) {
        try {
            const { jwt } = req.cookies;
            const { _id } = ((0, jsonwebtoken_1.verify)(jwt, process.env.TOKEN_SECRET));
            const currentUser = await this.userService.findOneForMiddleware(new mongodb_1.ObjectId(_id));
            req.currentUser = currentUser;
            next();
        }
        catch (error) {
            req.currentUser = null;
            next();
        }
    }
};
exports.CurrentUserMiddleware = CurrentUserMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], CurrentUserMiddleware);
//# sourceMappingURL=current-user.middleware.js.map