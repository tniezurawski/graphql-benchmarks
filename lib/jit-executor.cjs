const { lru } = require('tiny-lru');
const { compileQuery, isCompiledQuery } = require('graphql-jit');

module.exports.executor = (schema, cacheSize = 1024, compilerOpts = {}) => {
  const cache = lru(cacheSize);
  return async ({ context, document, operationName, request, queryHash }) => {
    const prefix = operationName || 'NotParametrized';
    const cacheKey = `${prefix}-${queryHash}`;
    let compiledQuery = cache.get(cacheKey);
    if (!compiledQuery) {
      const compilationResult = compileQuery(
        schema,
        document,
        operationName || undefined,
        compilerOpts,
      );
      if (isCompiledQuery(compilationResult)) {
        compiledQuery = compilationResult;
        cache.set(cacheKey, compiledQuery);
      } else {
        // ...is ExecutionResult
        return compilationResult;
      }
    }
    return compiledQuery.query(undefined, context, request.variables || {});
  };
};
