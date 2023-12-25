import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { SignInDto } from './dto/signIn.dto';
import { Response } from 'express';
import { UserDto } from './dto/user.dto';
import { UpdateUserRolesDto } from './dto/update-role.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<UserDto>;
    signin(signInDto: SignInDto, res: Response): Promise<UserDto>;
    logout(res: Response): {
        message: string;
    };
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    me(currentUser: User): Promise<User>;
    updateRoles(updateUserRolesDto: UpdateUserRolesDto): Promise<User>;
    getAuthors(): Promise<User[]>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
