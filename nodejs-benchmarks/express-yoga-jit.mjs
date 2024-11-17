'use strict';

import express from 'express';
import cors from 'cors';
import { createYoga } from 'graphql-yoga';
import { useGraphQlJit } from '@envelop/graphql-jit';
import { createApolloSchema } from '../lib/schemas/createApolloSchema.js';

const app = express();
const schema = createApolloSchema();
const yoga = createYoga({
  graphqlEndpoint: '/graphql',
  schema,
  plugins: [useGraphQlJit()],
});

app.use(yoga.graphqlEndpoint, cors(), yoga);
app.listen(3000);
