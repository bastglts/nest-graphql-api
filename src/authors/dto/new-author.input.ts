import { InputType, Field } from "@nestjs/graphql";
import { NewBookInput } from "src/books/dto/new-book.input";

@InputType()
export class NewAuthorInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(type => [NewBookInput])
  books: NewBookInput[];
}
