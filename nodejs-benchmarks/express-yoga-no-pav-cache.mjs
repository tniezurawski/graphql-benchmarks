'use strict';

import express from 'express';
import cors from 'cors';
import { createYoga } from 'graphql-yoga';
import { createApolloSchema } from '../lib/schemas/createApolloSchema.js';

const app = express();
const schema = createApolloSchema();
const yoga = createYoga({
  graphqlEndpoint: '/graphql',
  schema,
  parserAndValidationCache: false,
});

app.use(yoga.graphqlEndpoint, cors(), yoga);
app.listen(3000);
