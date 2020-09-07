import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { BooksModule } from 'src/books/books.module';
import { AuthorSchema } from './schemas/authors.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }]),
    BooksModule
  ],
  providers: [AuthorsService, AuthorsResolver]
})
export class AuthorsModule { }
