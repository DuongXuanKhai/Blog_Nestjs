import mongoose, { HydratedDocument } from "mongoose";
export type CategoryDocument = HydratedDocument<Category>;
export declare class Category {
    _id?: mongoose.Types.ObjectId;
    title: string;
    desc: string;
}
export declare const CategorySchema: mongoose.Schema<Category, mongoose.Model<Category, any, any, any, mongoose.Document<unknown, any, Category> & Omit<Category & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Category, mongoose.Document<unknown, {}, mongoose.FlatRecord<Category>> & Omit<mongoose.FlatRecord<Category> & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>>;
