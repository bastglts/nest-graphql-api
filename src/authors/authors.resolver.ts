import { Resolver, Query, Args, ResolveField, Parent } from "@nestjs/graphql";
import { Author } from "./models/authors.model";
import { Post } from "../posts/models/posts.model";
import { AuthorsService } from "./authors.service";
import { PostsService } from "../posts/posts.service";
import { AuthorDocument } from "./schemas/authors.schema";


@Resolver(of => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) { }

  @Query(_returns => Author)
  async author(@Args('id') id: string) {
    return await this.authorsService.findOne(id);
  }

  @Query(_returns => [Author])
  async authors() {
    return await this.authorsService.findAll();
  }

  @ResolveField(_returns => [Post])
  async posts(@Parent() author: AuthorDocument) {
    return await this.postsService.find(author);
  }
}
