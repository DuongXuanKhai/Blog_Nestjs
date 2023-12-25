import mongoose, { HydratedDocument } from "mongoose";
export type CommentDocument = HydratedDocument<Comment>;
export declare class Reply {
    _id?: mongoose.Types.ObjectId;
    replyBy: string;
    replyText: string;
    replyAt: Date;
}
export declare class Comment {
    postId: string;
    _id?: mongoose.Types.ObjectId;
    commentBy: string;
    commentText: string;
    commentAt: Date;
    replies: Reply[];
}
export declare const CommentSchema: mongoose.Schema<Comment, mongoose.Model<Comment, any, any, any, mongoose.Document<unknown, any, Comment> & Omit<Comment & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Comment, mongoose.Document<unknown, {}, mongoose.FlatRecord<Comment>> & Omit<mongoose.FlatRecord<Comment> & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>>;
