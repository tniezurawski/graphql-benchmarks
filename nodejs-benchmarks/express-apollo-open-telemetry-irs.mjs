'use strict';

import '../lib/instrumentation/open-telemetry-express-ignore-resolve-spans.js';

import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { createApolloSchema } from '../lib/schemas/createApolloSchema.js';

const app = express();
const schema = createApolloSchema();
const server = new ApolloServer({
  schema,
});
server.start().then(() => {
  app.use('/graphql', cors(), express.json(), expressMiddleware(server, {}));
  app.listen(3000);
});
