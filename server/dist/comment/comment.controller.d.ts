import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { User } from 'src/user/models/user.model';
import { Comment } from './models/comment.model';
import { CreateReplyDto } from './dto/create-reply.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto, currentUser: User): Promise<Comment>;
    findAll(id: string): Promise<Comment[]>;
    findOne(commentId: string): Promise<Comment>;
    createReply(createReplyDto: CreateReplyDto, currentUser: User): Promise<Comment>;
    update(id: string, updateCommentDto: UpdateCommentDto): string;
    remove(id: string): string;
}
