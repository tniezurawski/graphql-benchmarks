import { makeExecutableSchema } from '@graphql-tools/schema';
import gql from 'graphql-tag';
import md5 from 'md5';

import { data } from '../data.js';

const typeDefs = gql`
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    md5: String!
    company: String!
    books: [Book!]!
  }

  type Book {
    id: ID!
    name: String!
    genre: String!
    numPages: Int!
  }

  type Query {
    authors: [Author!]!
  }
`;

const resolvers = {
  Author: {
    fullName: (parent) => parent.firstName + ' ' + parent.lastName,
    md5: (parent) => md5(parent.firstName),
  },
  Query: {
    authors: () => data,
  },
};

const asyncResolvers = {
  Author: {
    fullName: (parent) => parent.firstName + ' ' + parent.lastName,
    md5: (parent) => md5(parent.firstName),
  },
  Query: {
    authors: async () => data,
  },
};

export function createApolloSchema() {
  return makeExecutableSchema({
    typeDefs,
    resolvers,
  });
}

export function createAsyncApolloSchema() {
  return makeExecutableSchema({
    typeDefs,
    resolvers: asyncResolvers,
  });
}
