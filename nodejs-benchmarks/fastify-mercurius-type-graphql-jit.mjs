'use strict';

import Fastify from 'fastify';
import mercurius from 'mercurius';

import { createTypeGraphQLSchema } from '../lib/schemas/createTypeGraphQLSchema.js';

const app = Fastify();

createTypeGraphQLSchema().then((schema) => {
  app.register(mercurius, {
    schema,
    jit: 1,
  });

  app.listen({
    port: 3000,
  });
});
