'use strict';

const { createServer } = require('node:http');
const { createYoga } = require('graphql-yoga');
const {
  createTypeGraphQLSchema,
} = require('../lib/schemas/createTypeGraphQLSchema.cjs');

createTypeGraphQLSchema().then((schema) => {
  const yoga = createYoga({
    graphqlEndpoint: '/graphql',
    schema,
  });

  const server = createServer(yoga);
  server.listen(3000);
});
