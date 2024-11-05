'use strict';

const Fastify = require('fastify');
const mercurius = require('mercurius');

const {
  createTypeGraphQLSchema,
} = require('../lib/schemas/createTypeGraphQLSchema.cjs');

const app = Fastify();

createTypeGraphQLSchema().then((schema) => {
  app.register(mercurius, {
    schema,
  });

  app.listen({
    port: 3000,
  });
});
