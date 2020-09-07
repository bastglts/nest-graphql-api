import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDocument } from './schemas/books.schema';
import { AuthorDocument } from 'src/authors/schemas/authors.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly booksModel: Model<BookDocument>) { }

  async find(author: AuthorDocument): Promise<BookDocument[]> {
    const { _id } = author;
    return await this.booksModel.find({ authorId: _id }).exec();
  }
}
