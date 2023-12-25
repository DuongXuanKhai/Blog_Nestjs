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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const post_model_1 = require("./models/post.model");
const mongoose_2 = require("mongoose");
const category_service_1 = require("../category/category.service");
const tag_service_1 = require("../tag/tag.service");
const mongodb_1 = require("mongodb");
const apiFeatures_1 = require("./utility/apiFeatures");
let PostService = exports.PostService = class PostService {
    constructor(postModel, categoryService, tagService) {
        this.postModel = postModel;
        this.categoryService = categoryService;
        this.tagService = tagService;
    }
    async create(createPostDto, currentUser) {
        const category = await this.categoryService.findOne(new mongodb_1.ObjectId(createPostDto.category));
        const tags = [];
        if (createPostDto.tags.length) {
            for (let t = 0; t < createPostDto.tags.length; t++) {
                let tag = await this.tagService.findOne(new mongodb_1.ObjectId(createPostDto.tags[t]));
                tags.push(tag._id.toString());
            }
        }
        const post = new this.postModel(createPostDto);
        post.author = currentUser._id.toString();
        post.category = category._id.toString();
        post.tags = tags;
        return await this.postModel.create(post);
    }
    async findAll(query) {
        let limit;
        query.limit ? (limit = query.limit) : (limit = 4);
        const filteredPost = new apiFeatures_1.default(this.postModel.find(), query)
            .search()
            .approved(true)
            .sortByNewest()
            .filter();
        const filteredPostCount1 = await filteredPost.query;
        const filteredPostCount = filteredPostCount1.length;
        const apiFeatures = new apiFeatures_1.default(this.postModel.find(), query)
            .search()
            .approved(true)
            .sortByNewest()
            .filter()
            .pagination(limit);
        const posts = await apiFeatures.query
            .populate('author', '_id name avatar')
            .populate('category', '_id title')
            .populate({ path: 'tags', model: 'Tag', select: '_id title' });
        return { filteredPostCount, posts, limit };
    }
    async findOne(id) {
        const post = await this.postModel
            .findOne({ _id: id, approved: true })
            .populate('author', '_id name avatar')
            .populate('category', '_id title')
            .populate({ path: 'tags', model: 'Tag', select: '_id title' })
            .exec();
        if (!post)
            throw new common_1.NotFoundException('Post not found.');
        return post;
    }
    async approve(postApproveDto) {
        const ids = postApproveDto.ids.map((id) => new mongodb_1.ObjectId(id));
        const approve = await this.postModel.updateMany({ _id: { $in: ids } }, { $set: { approved: postApproveDto.approve } }, { multi: true });
        return approve;
    }
    async getAllPostByAdmin() {
        return await this.postModel
            .find()
            .select('_id title images approved createdAt')
            .populate('author', '_id name avatar');
    }
    async likes(postId, currentUser) {
        let post = await this.postModel
            .findOne({ _id: postId, approved: true })
            .exec();
        if (!post)
            throw new common_1.NotFoundException('Post not found.');
        if (!post.likes.includes(currentUser._id.toString())) {
            post.likes.push(currentUser._id.toString());
        }
        else {
            post.likes = post.likes.filter((l) => l.toString() !== currentUser._id.toString());
        }
        await post.save({ validateBeforeSave: false });
        return post.likes;
    }
    async findOneAndChangeCommentCount(id, comment) {
        const post = await this.postModel.findById(id);
        if (!post)
            throw new common_1.NotFoundException('Post Not Found');
        if (comment === true) {
            post.totalComments = post.totalComments + 1;
        }
        else {
            post.totalComments = post.totalComments - 1;
        }
        return await post.save();
    }
    update(id, updatePostDto) {
        return `This action updates a #${id} post`;
    }
    remove(id) {
        return `This action removes a #${id} post`;
    }
};
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(post_model_1.Post.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        category_service_1.CategoryService,
        tag_service_1.TagService])
], PostService);
//# sourceMappingURL=post.service.js.map