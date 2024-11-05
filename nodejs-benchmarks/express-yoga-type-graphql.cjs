'use strict';

const express = require('express');
const { createYoga } = require('graphql-yoga');

const cors = require('cors');
const {
  createTypeGraphQLSchema,
} = require('../lib/schemas/createTypeGraphQLSchema.cjs');

const app = express();

createTypeGraphQLSchema().then((schema) => {
  const yoga = createYoga({
    graphqlEndpoint: '/graphql',
    schema,
  });

  app.use(yoga.graphqlEndpoint, cors(), yoga);
  app.listen(3000);
});
