'use strict';

import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';
import { useGraphQlJit } from '@envelop/graphql-jit';
import { createApolloSchema } from '../lib/schemas/createApolloSchema.js';

const schema = createApolloSchema();
const yoga = createYoga({
  graphqlEndpoint: '/graphql',
  schema,
  plugins: [useGraphQlJit()],
});

const server = createServer(yoga);

server.listen(3000);
