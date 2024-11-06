import { Injectable } from '@nestjs/common';
import { AuthorRest } from './models/author.rest';
import { data } from '../../../../lib/data.cjs';

@Injectable()
export class AuthorsService {
  async getAuthors(): Promise<AuthorRest[]> {
    return data as AuthorRest[];
  }
}
