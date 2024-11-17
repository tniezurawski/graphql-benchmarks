import { createYoga } from 'graphql-yoga';
import { useGraphQlJit } from '@envelop/graphql-jit';

// @ts-ignore
import { createApolloSchema } from '../../lib/schemas/createApolloSchema.js';

const schema = createApolloSchema();

const yoga = createYoga({
  graphqlEndpoint: '/graphql',
  schema,
  plugins: [useGraphQlJit()],
});

await Deno.serve({ port: 3000 }, (request) => {
  return yoga(request);
});

process.on('SIGINT', async () => {
  process.exit(0);
});

process.on('SIGTERM', async () => {
  process.exit(0);
});
