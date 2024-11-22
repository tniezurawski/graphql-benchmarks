import { createHandler } from 'graphql-http/lib/use/fetch';
import { createApolloSchema } from '../../lib/schemas/createApolloSchema.js';

const schema = createApolloSchema();

// Create the GraphQL over HTTP native fetch handler
const handler = createHandler({ schema });

// Start serving on `/graphql` using the handler
export default {
  port: 3000,
  fetch(req) {
    const [path, _search] = req.url.split('?');
    if (path.endsWith('/graphql')) {
      return handler(req);
    } else {
      return new Response(null, { status: 404 });
    }
  },
};
