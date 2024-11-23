'use strict';

import Fastify from 'fastify';
import mercurius from 'mercurius';

import builder from '../lib/schemas/createPothosSchema.js';

const app = Fastify();

app.register(mercurius, {
  schema: builder.toSchema(),
});

app.listen({
  port: 3000,
});
