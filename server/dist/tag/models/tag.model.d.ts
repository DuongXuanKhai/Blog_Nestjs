import mongoose, { HydratedDocument } from "mongoose";
export type TagDocument = HydratedDocument<Tag>;
export declare class Tag {
    _id?: mongoose.Types.ObjectId;
    title: string;
}
export declare const TagSchema: mongoose.Schema<Tag, mongoose.Model<Tag, any, any, any, mongoose.Document<unknown, any, Tag> & Omit<Tag & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Tag, mongoose.Document<unknown, {}, mongoose.FlatRecord<Tag>> & Omit<mongoose.FlatRecord<Tag> & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>>;
