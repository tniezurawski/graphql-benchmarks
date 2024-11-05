'use strict';

const { createServer } = require('node:http');
const { createYoga } = require('graphql-yoga');
const { createApolloSchema } = require('../lib/schemas/createApolloSchema.cjs');

const schema = createApolloSchema();
const yoga = createYoga({
  graphqlEndpoint: '/graphql',
  schema,
  parserAndValidationCache: false,
});

const server = createServer(yoga);

server.listen(3000);
