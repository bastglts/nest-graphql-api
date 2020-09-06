import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthorDocument } from './schemas/authors.schema';

@Injectable()
export class AuthorsService {
  constructor(@InjectModel('Author') private authorsModel: Model<AuthorDocument>) { }

  async findOne(id: string): Promise<AuthorDocument> {
    return await this.authorsModel.findById(id).exec();
  }

  async findAll(): Promise<AuthorDocument[]> {
    return await this.authorsModel.find().exec();
  }
}
