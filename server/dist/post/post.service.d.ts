/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './models/post.model';
import { Model } from 'mongoose';
import { User } from 'src/user/models/user.model';
import { CategoryService } from 'src/category/category.service';
import { TagService } from 'src/tag/tag.service';
import { ObjectId } from 'mongodb';
import { PostApproveDto } from './dto/post-approve.dto';
export declare class PostService {
    private readonly postModel;
    private readonly categoryService;
    private readonly tagService;
    constructor(postModel: Model<PostDocument>, categoryService: CategoryService, tagService: TagService);
    create(createPostDto: CreatePostDto, currentUser: User): Promise<Post>;
    findAll(query: any): Promise<{
        filteredPostCount: number;
        posts: Post[];
        limit: number;
    }>;
    findOne(id: ObjectId): Promise<Post>;
    approve(postApproveDto: PostApproveDto): Promise<any>;
    getAllPostByAdmin(): Promise<Omit<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Post> & Omit<Post & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>> & Omit<import("mongoose").Document<unknown, {}, Post> & Omit<Post & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, never>[]>;
    likes(postId: ObjectId, currentUser: User): Promise<string[]>;
    findOneAndChangeCommentCount(id: ObjectId, comment: boolean): Promise<Post>;
    update(id: number, updatePostDto: UpdatePostDto): string;
    remove(id: number): string;
}
