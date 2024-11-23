import SchemaBuilder from '@pothos/core';
import { data } from '../data.js';
import md5 from 'md5';

interface Book {
  id: string;
  name: string;
  genre: string;
  numPages: number;
}

interface Author {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  books: Book[];
}

const builder = new SchemaBuilder({});
const BookRef = builder.objectRef<Book>('Book');
const AuthorRef = builder.objectRef<Author>('Author');

BookRef.implement({
  fields: (t) => ({
    id: t.exposeString('id'),
    name: t.exposeString('name'),
    genre: t.exposeString('genre'),
    numPages: t.exposeInt('numPages'),
  }),
});

AuthorRef.implement({
  fields: (t) => ({
    id: t.exposeString('id'),
    firstName: t.exposeString('firstName'),
    lastName: t.exposeString('lastName'),
    fullName: t.string({
      resolve: (parent) => {
        return parent.firstName + ' ' + parent.lastName;
      },
    }),
    md5: t.string({
      resolve: (parent) => {
        return md5(parent.firstName);
      },
    }),
    company: t.exposeString('company'),
    books: t.field({
      type: [BookRef],
      resolve: (parent) => parent.books,
    }),
  }),
});

builder.queryType({
  fields: (t) => ({
    authors: t.field({
      type: [AuthorRef],
      resolve: () => data,
    }),
  }),
});

export default builder;
