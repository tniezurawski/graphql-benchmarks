import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  genre: string;

  @Field(() => Int)
  numPages: number;
}
