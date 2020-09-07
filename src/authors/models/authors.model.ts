import { ObjectType, Field } from '@nestjs/graphql';
import { Book } from 'src/books/models/books.model';

@ObjectType()
export class Author {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(type => [Book])
  books: Book[];
}
