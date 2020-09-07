import { Resolver, Query, Args, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { AuthorsService } from "./authors.service";
import { BooksService } from "../books/books.service";
import { Author } from "./models/authors.model";
import { Book } from "../books/models/books.model";
import { AuthorDocument } from "./schemas/authors.schema";
import { NewAuthorInput } from "./dto/new-author.input";
import { CreateBookDto } from "src/books/dto/create-book.dto";

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

  @Mutation(returns => Author)
  async addAuthor(@Args('newAuthorInput') newAuthorInput: NewAuthorInput): Promise<Author> {
    const { firstName, lastName, books } = newAuthorInput;
    const newAuthor = await this.authorsService.create({
      firstName,
      lastName,
    });

    const { _id } = newAuthor;
    const booksDto: CreateBookDto[] = books.map((book) => {
      return {
        ...book,
        authorId: _id,
      };
    })
    const newBooks = await this.booksService.create(booksDto);

    return {
      ...newAuthor,
      books: newBooks,
    };
  }
}
