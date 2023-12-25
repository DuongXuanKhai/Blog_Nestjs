import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Model } from 'mongoose';
import { CommentDocument, Comment } from './models/comment.model';
import { User } from 'src/user/models/user.model';
import { PostService } from 'src/post/post.service';
import { CreateReplyDto } from './dto/create-reply.dto';
export declare class CommentService {
    private readonly commentModel;
    private readonly postService;
    constructor(commentModel: Model<CommentDocument>, postService: PostService);
    create(createCommentDto: CreateCommentDto, currentUser: User): Promise<Comment>;
    findAll(id: string): Promise<Comment[]>;
    findOne(commentId: string): Promise<Comment>;
    createReply(createReplyDto: CreateReplyDto, currentUser: User): Promise<Comment>;
    update(id: number, updateCommentDto: UpdateCommentDto): string;
    remove(id: number): string;
}
