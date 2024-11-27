'use strict';

import '../lib/instrumentation/open-telemetry-fastify-ignore-trivial-resolve-spans.js';

import Fastify from 'fastify';
import mercurius from 'mercurius';
import { createApolloSchema } from '../lib/schemas/createApolloSchema.js';

const schema = createApolloSchema();

const app = Fastify();

app.register(mercurius, {
  schema,
});

app.listen({
  port: 3000,
});
