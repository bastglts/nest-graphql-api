import { Resolver, Query, Args, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { Author } from "./models/authors.model";
import { Book } from "../books/models/books.model";
import { AuthorsService } from "./authors.service";
import { BooksService } from "../books/books.service";
import { AuthorDocument } from "./schemas/authors.schema";


@Resolver(_of => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private booksService: BooksService,
  ) { }

  @Query(returns => Author)
  async author(@Args('id') id: string) {
    return await this.authorsService.findOne(id);
  }

  @Query(returns => [Author])
  async authors() {
    return await this.authorsService.findAll();
  }

  @ResolveField(returns => [Book])
  async books(@Parent() author: AuthorDocument) {
    return await this.booksService.find(author);
  }
}
