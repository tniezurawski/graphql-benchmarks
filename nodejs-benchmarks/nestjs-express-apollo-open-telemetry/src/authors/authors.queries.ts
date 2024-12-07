import { Query } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsQueries {
  constructor(private readonly authorsService: AuthorsService) {}

  @Query(() => [Author], { name: 'authors' })
  async getAuthorsConnection() {
    return this.authorsService.getAuthors();
  }
}
