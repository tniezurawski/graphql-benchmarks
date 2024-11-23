'use strict';

import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import builder from '../lib/schemas/createPothosSchema.js';

const app = express();

const server = new ApolloServer({
  schema: builder.toSchema(),
});
server.start().then(() => {
  app.use('/graphql', cors(), express.json(), expressMiddleware(server, {}));
  app.listen(3000);
});
