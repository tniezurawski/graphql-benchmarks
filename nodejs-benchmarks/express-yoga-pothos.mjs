'use strict';

import express from 'express';
import cors from 'cors';
import { createYoga } from 'graphql-yoga';
import builder from '../lib/schemas/createPothosSchema.js';

const app = express();

const yoga = createYoga({
  graphqlEndpoint: '/graphql',
  schema: builder.toSchema(),
});

app.use(yoga.graphqlEndpoint, cors(), yoga);
app.listen(3000);
