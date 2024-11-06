import { BookRest } from '../../books/models/book.rest';

export interface AuthorRest {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  books: BookRest[];
}
