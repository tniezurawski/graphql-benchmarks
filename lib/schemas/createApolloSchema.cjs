const { makeExecutableSchema } = require('@graphql-tools/schema');
const { gql } = require('graphql-tag');
const md5 = require('md5');
const { data } = require('../data.cjs');

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

module.exports.createApolloSchema = () =>
  makeExecutableSchema({
    typeDefs,
    resolvers,
  });

module.exports.createAsyncApolloSchema = () =>
  makeExecutableSchema({
    typeDefs,
    resolvers: asyncResolvers,
  });
