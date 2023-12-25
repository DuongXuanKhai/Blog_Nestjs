import mongoose from "mongoose";
export declare class UserDto {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    avatar: string;
    roles: string[];
    createdAt?: Date;
    updatedAt?: Date;
    password: string;
}
