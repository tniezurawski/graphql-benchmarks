import { createYoga } from 'graphql-yoga';
import { useGraphQlJit } from '@envelop/graphql-jit';

const {
  createApolloSchema,
} = require('../../lib/schemas/createApolloSchema.cjs');

const schema = createApolloSchema();

const yoga = createYoga({
  graphqlEndpoint: '/graphql',
  schema,
  plugins: [useGraphQlJit()],
});

const server = Bun.serve({
  fetch: (request) => yoga(request),
  port: 3000,
});

process.on('SIGINT', (code) => {
  server.stop(true);
  process.exit(0);
});

process.on('SIGTERM', (code) => {
  server.stop(true);
  process.exit(0);
});
