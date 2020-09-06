import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { PostsModule } from 'src/posts/posts.module';
import { AuthorSchema } from './schemas/authors.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Author', schema: AuthorSchema }]),
    PostsModule
  ],
  providers: [AuthorsService, AuthorsResolver]
})
export class AuthorsModule { }
