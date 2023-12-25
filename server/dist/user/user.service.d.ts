import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './models/user.model';
import { Model } from 'mongoose';
import { SignInDto } from './dto/signIn.dto';
import { UserDto } from './dto/user.dto';
import { ObjectId } from 'mongodb';
import { UpdateUserRolesDto } from './dto/update-role.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<UserDto>;
    signin(signInDto: SignInDto): Promise<UserDto>;
    generateToken(user: User): Promise<string>;
    findAll(): Promise<User[]>;
    findOne(id: ObjectId): Promise<User>;
    updateRoles(updateUserRolesDto: UpdateUserRolesDto): Promise<User>;
    getAuthors(): Promise<User[]>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
    findOneForMiddleware(_id: ObjectId): Promise<User>;
}
