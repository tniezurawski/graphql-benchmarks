import { Injectable } from '@nestjs/common';
import { AuthorRest } from './models/author.rest';
import { data } from '../data/data';

@Injectable()
export class AuthorsService {
  async getAuthors(): Promise<AuthorRest[]> {
    return data as AuthorRest[];
  }
}
