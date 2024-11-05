'use strict';

import { readFile } from 'fs/promises';
const pkgJson = JSON.parse(
  await readFile(new URL('../package.json', import.meta.url)),
);
import { createRequire } from 'module';
import path from 'path';

const stacks = {
  'express-apollo': {
    checked: true,
    hasRouter: false,
    package: '@apollo/server',
  },
  'express-apollo-jit': { hasRouter: false, package: 'graphql-jit' },
  'express-apollo-type-graphql': { hasRouter: false, package: 'type-graphql' },
  'express-apollo-type-graphql-jit': {
    hasRouter: false,
    package: 'graphql-jit',
  },

  'fastify-mercurius': { hasRouter: false, package: 'mercurius' },
  'fastify-mercurius-jit': { hasRouter: false, package: 'graphql-jit' },
};

const require = createRequire(import.meta.url);

const _choices = [];
Object.keys(stacks).forEach((pkg) => {
  if (!stacks[pkg].version) {
    const module = pkgJson.dependencies[pkg] ? pkg : stacks[pkg].package;
    const version = require(
      path.resolve(`node_modules/${module}/package.json`),
    ).version;
    stacks[pkg].version = version;
  }
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
