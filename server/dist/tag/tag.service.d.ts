import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Model } from 'mongoose';
import { Tag, TagDocument } from './models/tag.model';
import { ObjectId } from 'mongodb';
export declare class TagService {
    private readonly tagModel;
    constructor(tagModel: Model<TagDocument>);
    create(createTagDto: CreateTagDto): Promise<Tag>;
    findAll(): Promise<Tag[]>;
    findOne(id: ObjectId): Promise<Tag>;
    update(id: number, updateTagDto: UpdateTagDto): string;
    remove(id: number): string;
}
