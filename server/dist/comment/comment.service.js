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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comment_model_1 = require("./models/comment.model");
const post_service_1 = require("../post/post.service");
const mongodb_1 = require("mongodb");
let CommentService = exports.CommentService = class CommentService {
    constructor(commentModel, postService) {
        this.commentModel = commentModel;
        this.postService = postService;
    }
    async create(createCommentDto, currentUser) {
        const post = await this.postService.findOneAndChangeCommentCount(new mongodb_1.ObjectId(createCommentDto.postId), true);
        const newComment = new this.commentModel({
            postId: post._id.toString(),
            commentBy: currentUser._id.toString(),
            commentText: createCommentDto.commentText.toString(),
            commentAt: new Date(),
        });
        return await this.commentModel.create(newComment);
    }
    async findAll(id) {
        return await this.commentModel
            .find({ postId: id })
            .populate('commentBy', '_id name avatar')
            .populate({
            path: 'replies.replyBy',
            model: 'User',
            select: '_id name avatar',
        })
            .exec();
    }
    async findOne(commentId) {
        const comment = await this.commentModel
            .findById(new mongodb_1.ObjectId(commentId))
            .populate('commentBy', '_id name avatar')
            .populate({
            path: 'replies.replyBy',
            model: 'User',
            select: '_id name avatar',
        })
            .exec();
        if (!comment)
            throw new common_1.NotFoundException('Comment not found');
        return comment;
    }
    async createReply(createReplyDto, currentUser) {
        const comment = await this.findOne(createReplyDto.commentId);
        await this.postService.findOneAndChangeCommentCount(new mongodb_1.ObjectId(comment.postId), true);
        const newReply = {
            _id: new mongoose_2.default.Types.ObjectId(),
            replyBy: currentUser._id.toString(),
            replyText: createReplyDto.replyText,
            replyAt: new Date(),
        };
        comment.replies.push(newReply);
        const result = await this.commentModel.findByIdAndUpdate(comment._id, comment, {
            new: true,
        });
        return result;
    }
    update(id, updateCommentDto) {
        return `This action updates a #${id} comment`;
    }
    remove(id) {
        return `This action removes a #${id} comment`;
    }
};
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comment_model_1.Comment.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        post_service_1.PostService])
], CommentService);
//# sourceMappingURL=comment.service.js.map