'use strict';

import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';
import { createApolloSchema } from '../lib/schemas/createApolloSchema.js';

const schema = createApolloSchema();
const yoga = createYoga({
  graphqlEndpoint: '/graphql',
  schema,
  parserAndValidationCache: false,
});

const server = createServer(yoga);

server.listen(3000);
