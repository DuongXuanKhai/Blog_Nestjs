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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { User } from 'src/user/models/user.model';
import { Post as PostClass } from './models/post.model';
import { PostApproveDto } from './dto/post-approve.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto, currentUser: User): Promise<PostClass>;
    approve(postApproveDto: PostApproveDto): Promise<any>;
    getAllPostByAdmin(): Promise<Omit<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, PostClass> & Omit<PostClass & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>> & Omit<import("mongoose").Document<unknown, {}, PostClass> & Omit<PostClass & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>, never>[]>;
    likes(postId: string, currentUser: User): Promise<string[]>;
    findAll(query: any): Promise<{
        filteredPostCount: number;
        posts: PostClass[];
        limit: number;
    }>;
    findOne(id: string): Promise<PostClass>;
    update(id: string, updatePostDto: UpdatePostDto): string;
    remove(id: string): string;
}
