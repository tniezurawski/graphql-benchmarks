'use strict';

import Fastify from 'fastify';
import mercurius from 'mercurius';
import { createApolloSchema } from '../../lib/schemas/createApolloSchema.js';

const schema = createApolloSchema();

const app = Fastify();

app.register(mercurius, {
  schema,
  jit: 1,
});

app.listen({
  port: 3000,
});

process.on('SIGINT', async () => {
  process.exit(0);
});

process.on('SIGTERM', async () => {
  process.exit(0);
});
