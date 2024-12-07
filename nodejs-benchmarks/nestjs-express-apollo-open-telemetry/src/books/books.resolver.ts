import { Resolver } from '@nestjs/graphql';
import { Book } from '../books/models/book.model';

@Resolver(() => Book)
export class BooksResolver {}
