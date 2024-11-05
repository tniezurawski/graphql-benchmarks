'use strict';

const express = require('express');
const { createYoga } = require('graphql-yoga');

const cors = require('cors');
const { createApolloSchema } = require('../lib/schemas/createApolloSchema.cjs');

const app = express();
const schema = createApolloSchema();
const yoga = createYoga({
  graphqlEndpoint: '/graphql',
  schema,
});

app.use(yoga.graphqlEndpoint, cors(), yoga);
app.listen(3000);
