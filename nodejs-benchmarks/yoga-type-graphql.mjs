'use strict';

import { createServer } from 'node:http';
import { createYoga } from 'graphql-yoga';
import { createTypeGraphQLSchema } from '../lib/schemas/createTypeGraphQLSchema.js';

createTypeGraphQLSchema().then((schema) => {
  const yoga = createYoga({
    graphqlEndpoint: '/graphql',
    schema,
  });

  const server = createServer(yoga);
  server.listen(3000);
});
