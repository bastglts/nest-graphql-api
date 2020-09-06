import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from 'src/posts/models/posts.model';

@ObjectType()
export class Author {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(type => [Post])
  posts: Post[];
}
