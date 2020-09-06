import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(type => Int, { nullable: true })
  votes?: number;
}
