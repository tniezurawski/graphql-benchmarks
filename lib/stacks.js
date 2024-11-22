'use strict';

// import { readFile } from 'fs/promises';
// const pkgJson = JSON.parse(
//   await readFile(new URL('../package.json', import.meta.url)),
// );
// import { createRequire } from 'module';
// import path from 'path';

const stacks = {
  // NodeJS
  'express-apollo': { checked: true },
  'express-apollo-type-graphql': {},

  'express-graphql-http': {},

  'express-yoga': {},
  'express-yoga-jit': {},
  'express-yoga-no-pav-cache': {},
  'express-yoga-type-graphql': {},

  'koa-apollo': {},
  'koa-graphql-api': {},

  yoga: {},
  'yoga-jit': {},
  'yoga-no-pav-cache': {},
  'yoga-type-graphql': {},

  'fastify-mercurius': {},
  'fastify-mercurius-jit': {},
  'fastify-mercurius-type-graphql': {},
  'fastify-mercurius-type-graphql-jit': {},

  'nestjs-express-apollo': {},
  'nestjs-fastify-apollo': {},
  'nestjs-fastify-mercurius': {},
  'nestjs-fastify-mercurius-jit': {},
  'nestjs-fastify-mercurius-jit-deparentification': {},

  // Bun
  'bun-yoga': {},
  'bun-yoga-jit': {},

  'bun-fastify-mercurius': {},
  'bun-fastify-mercurius-jit': {},

  // Deno
  'deno-yoga': {},
  'deno-yoga-jit': {},

  'deno-fastify-mercurius': {},
  'deno-fastify-mercurius-jit': {},
};

// const require = createRequire(import.meta.url);

const _choices = [];
Object.keys(stacks).forEach((pkg) => {
  // if (!stacks[pkg].version) {
  //   const module = pkgJson.dependencies[pkg] ? pkg : stacks[pkg].package;
  //   const version = require(
  //     path.resolve(`node_modules/${module}/package.json`),
  //   ).version;
  //   stacks[pkg].version = version;
  // }
  _choices.push(pkg);
});

export const choices = _choices.sort();
export function list(extra = false) {
  return _choices
    .map((c) => {
      return extra === !!stacks[c].extra
        ? Object.assign({}, stacks[c], { name: c })
        : null;
    })
    .filter((c) => c);
}
export function info(module) {
  return stacks[module];
}
