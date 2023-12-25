import mongoose, { HydratedDocument } from "mongoose";
export type PostDocument = HydratedDocument<Post>;
export declare class Post {
    _id?: mongoose.Types.ObjectId;
    title: string;
    content: string;
    images: string[];
    excerpt: string;
    author: string;
    category: string;
    tags: string[];
    likes: string[];
    totalComments: number;
    approved: boolean;
    approvedBy: string;
}
export declare const PostSchema: mongoose.Schema<Post, mongoose.Model<Post, any, any, any, mongoose.Document<unknown, any, Post> & Omit<Post & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Post, mongoose.Document<unknown, {}, mongoose.FlatRecord<Post>> & Omit<mongoose.FlatRecord<Post> & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>>;
