'use strict';

import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import { createTypeGraphQLSchema } from '../lib/schemas/createTypeGraphQLSchema.js';

const app = express();

createTypeGraphQLSchema().then((schema) => {
  const server = new ApolloServer({
    schema,
  });
  server.start().then(() => {
    app.use('/graphql', cors(), express.json(), expressMiddleware(server, {}));
    app.listen(3000);
  });
});
