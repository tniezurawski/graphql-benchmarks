'use strict';

const cors = require('cors');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const express = require('express');
const {
  createTypeGraphQLSchema,
} = require('../lib/schemas/createTypeGraphQLSchema.cjs');

const { executor } = require('../lib/jit-executor.cjs');

const app = express();

createTypeGraphQLSchema().then((schema) => {
  const server = new ApolloServer({
    schema,
    executor: executor(schema),
  });
  server.start().then(() => {
    app.use('/graphql', cors(), express.json(), expressMiddleware(server, {}));
    app.listen(3000);
  });
});
