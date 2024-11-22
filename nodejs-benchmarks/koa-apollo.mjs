import http from 'http';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { koaMiddleware } from '@as-integrations/koa';

import { createApolloSchema } from '../lib/schemas/createApolloSchema.js';

const schema = createApolloSchema();

const app = new Koa();
const httpServer = http.createServer(app.callback());

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(cors());
app.use(bodyParser());
app.use(koaMiddleware(server, {}));

await new Promise((resolve) => httpServer.listen({ port: 3000 }, resolve));
