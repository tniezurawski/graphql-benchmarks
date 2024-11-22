'use strict';

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { createApolloSchema } from '../lib/schemas/createApolloSchema.js';

const schema = createApolloSchema();

Promise.all([
  import('graphql-api-koa/execute.mjs'),
  import('graphql-api-koa/errorHandler.mjs'),
]).then(([{ default: execute }, { default: errorHandler }]) => {
  const app = new Koa()
    .use(errorHandler())
    .use(bodyParser())
    .use(execute({ schema }));

  app.listen(3000);
});
