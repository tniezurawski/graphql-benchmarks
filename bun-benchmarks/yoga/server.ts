import { createYoga } from 'graphql-yoga';
import { createApolloSchema } from '../../lib/schemas/createApolloSchema.js';

const schema = createApolloSchema();

const yoga = createYoga({
  graphqlEndpoint: '/graphql',
  schema,
});

const server = Bun.serve({
  fetch: (request) => yoga(request),
  port: 3000,
});

process.on('SIGINT', async () => {
  await server.stop(true);
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await server.stop(true);
  process.exit(0);
});
