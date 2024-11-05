'use strict';

const Fastify = require('fastify');
const mercurius = require('mercurius');
const {
  createApolloSchema,
} = require('../../lib/schemas/createApolloSchema.cjs');

const schema = createApolloSchema();

const app = Fastify();

app.register(mercurius, {
  schema,
  jit: 1,
});

app.listen({
  port: 3000,
});
