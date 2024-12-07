import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Book } from '../../books/models/book.model';

@ObjectType()
export class Author {
  @Field(() => ID)
  id: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  fullName: string;
  @Field()
  md5: string;
  @Field()
  company: string;
  @Field(() => [Book])
  books: [Book];
}
