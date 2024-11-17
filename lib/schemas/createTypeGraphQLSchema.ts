import 'reflect-metadata';
import {
  buildSchema,
  Resolver,
  Query,
  ObjectType,
  Field,
  Int,
  ID,
  FieldResolver,
  Root,
} from 'type-graphql';
import { data } from '../data.js';
import md5 from 'md5';

@ObjectType()
class Book {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  genre: string;
  @Field(() => Int)
  numPages: number;
}

@ObjectType()
class Author {
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
  books: Book[];
}

@Resolver(Author)
class SimpleResolver {
  @FieldResolver()
  fullName(@Root() root: Author) {
    return root.firstName + ' ' + root.lastName;
  }
  @FieldResolver()
  md5(@Root() root: Author) {
    return md5(root.firstName);
  }
  @Query(() => [Author])
  authors() {
    return data;
  }
}

@Resolver(Author)
class AsyncResolver {
  @FieldResolver()
  fullName(@Root() root: Author) {
    return root.firstName + ' ' + root.lastName;
  }
  @FieldResolver()
  md5(@Root() root: Author) {
    return md5(root.firstName);
  }
  @Query(() => [Author])
  async authors() {
    return data;
  }
}

export function createTypeGraphQLSchema() {
  return buildSchema({
    resolvers: [SimpleResolver],
  });
}

export function createAsyncTypeGraphQLSchema() {
  return buildSchema({
    resolvers: [AsyncResolver],
  });
}
