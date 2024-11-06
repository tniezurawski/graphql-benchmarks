import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Author } from './models/author.model';
import { AuthorRest } from './models/author.rest';
import md5 = require('md5');

@Resolver(() => Author)
export class AuthorsResolver {
  @ResolveField((returns) => String)
  fullName(@Parent() author: AuthorRest) {
    return author.firstName + ' ' + author.lastName;
  }

  @ResolveField((returns) => String)
  md5(@Parent() author: AuthorRest) {
    return md5(author.firstName);
  }
}
