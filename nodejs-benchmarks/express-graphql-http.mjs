'use strict';

import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { createApolloSchema } from '../lib/schemas/createApolloSchema.js';

const app = express();
const schema = createApolloSchema();

app.all(
  '/graphql',
  createHandler({
    schema: schema,
  }),
);

app.listen(3000);
