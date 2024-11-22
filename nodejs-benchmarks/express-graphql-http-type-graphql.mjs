'use strict';

import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { createTypeGraphQLSchema } from '../lib/schemas/createTypeGraphQLSchema.js';

const app = express();

createTypeGraphQLSchema().then((schema) => {
  app.all(
    '/graphql',
    createHandler({
      schema: schema,
    }),
  );

  app.listen(3000);
});
