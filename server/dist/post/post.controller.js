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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const create_post_dto_1 = require("./dto/create-post.dto");
const update_post_dto_1 = require("./dto/update-post.dto");
const authentication_guard_1 = require("../utility/guards/authentication.guard");
const authorize_guard_1 = require("../utility/guards/authorize.guard");
const user_roles_1 = require("../utility/user-roles");
const current_user_decorator_1 = require("../utility/decorators/current-user.decorator");
const user_model_1 = require("../user/models/user.model");
const mongodb_1 = require("mongodb");
const post_approve_dto_1 = require("./dto/post-approve.dto");
let PostController = exports.PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async create(createPostDto, currentUser) {
        return await this.postService.create(createPostDto, currentUser);
    }
    async approve(postApproveDto) {
        return await this.postService.approve(postApproveDto);
    }
    async getAllPostByAdmin() {
        return await this.postService.getAllPostByAdmin();
    }
    async likes(postId, currentUser) {
        return await this.postService.likes(new mongodb_1.ObjectId(postId), currentUser);
    }
    async findAll(query) {
        return await this.postService.findAll(query);
    }
    async findOne(id) {
        return await this.postService.findOne(new mongodb_1.ObjectId(id));
    }
    update(id, updatePostDto) {
        return this.postService.update(+id, updatePostDto);
    }
    remove(id) {
        return this.postService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard, (0, authorize_guard_1.AuthorizeGuard)([user_roles_1.UserRoles.Author])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto, user_model_1.User]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/approve'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard, (0, authorize_guard_1.AuthorizeGuard)([user_roles_1.UserRoles.Admin])),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_approve_dto_1.PostApproveDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "approve", null);
__decorate([
    (0, common_1.Get)('/get/all'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard, (0, authorize_guard_1.AuthorizeGuard)([user_roles_1.UserRoles.Admin])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getAllPostByAdmin", null);
__decorate([
    (0, common_1.Put)('/:postId/likes'),
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    __param(0, (0, common_1.Param)('postId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_model_1.User]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "likes", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_post_dto_1.UpdatePostDto]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "remove", null);
exports.PostController = PostController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
//# sourceMappingURL=post.controller.js.map