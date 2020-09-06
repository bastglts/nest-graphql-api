import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDocument } from './schemas/posts.schema';
import { AuthorDocument } from 'src/authors/schemas/authors.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postsModel: Model<PostDocument>) { }

  async find(author: AuthorDocument): Promise<PostDocument[]> {
    const { _id } = author;
    return await this.postsModel.find({ authorId: _id }).exec();
  }
}
