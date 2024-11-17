'use strict';

import express from 'express';
import cors from 'cors';
import { createYoga } from 'graphql-yoga';
import { createTypeGraphQLSchema } from '../lib/schemas/createTypeGraphQLSchema.js';

const app = express();

createTypeGraphQLSchema().then((schema) => {
  const yoga = createYoga({
    graphqlEndpoint: '/graphql',
    schema,
  });

  app.use(yoga.graphqlEndpoint, cors(), yoga);
  app.listen(3000);
});
