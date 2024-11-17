# Usage

Clone this repo. Then

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`

# Benchmarks

* __Machine:__ darwin arm64 | 10 vCPUs | 16.0GB Mem
* __Node:__ `v22.11.0`
* __Bun:__ `v1.1.34`
* __Run:__ Sun Nov 17 2024 23:07:22 GMT+0100 (Central European Standard Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000/graphql` (two rounds; one to warm-up, one to measure)

|                                                       | Requests/s | Latency (ms) | Throughput/Mb |
| :--                                                   | --:        | --:          | --:           |
| nodejs-fastify-mercurius-jit                          | 12706.4    | 78.13        | 109.81        |
| deno-yoga-jit                                         | 12223.8    | 81.24        | 105.35        |
| bun-fastify-mercurius-jit                             | 11688.4    | 84.97        | 100.47        |
| bun-yoga-jit                                          | 11329.6    | 87.67        | 97.39         |
| nodejs-yoga-jit                                       | 11096.0    | 89.53        | 95.88         |
| nodejs-fastify-mercurius-type-graphql-jit             | 9991.8     | 99.47        | 86.35         |
| nodejs-nestjs-fastify-mercurius-jit-deparentification | 9904.6     | 100.34       | 85.59         |
| nodejs-nestjs-fastify-mercurius-jit                   | 7679.1     | 129.54       | 66.36         |
| bun-yoga                                              | 7577.1     | 131.28       | 65.13         |
| bun-fastify-mercurius                                 | 6897.9     | 144.24       | 59.29         |
| nodejs-express-yoga-jit                               | 6765.6     | 147.03       | 58.81         |
| nodejs-fastify-mercurius                              | 5786.2     | 172.00       | 50.00         |
| nodejs-fastify-mercurius-type-graphql                 | 5472.2     | 181.86       | 47.29         |
| nodejs-yoga                                           | 5443.6     | 182.81       | 47.04         |
| nodejs-yoga-type-graphql                              | 5332.6     | 186.61       | 46.08         |
| deno-yoga                                             | 4469.4     | 222.68       | 38.52         |
| nodejs-express-yoga                                   | 4352.3     | 224.05       | 37.83         |
| nodejs-express-yoga-type-graphql                      | 4190.9     | 231.46       | 36.43         |
| nodejs-nestjs-fastify-mercurius                       | 3915.6     | 245.83       | 33.83         |
| nodejs-yoga-no-pav-cache                              | 3913.3     | 245.96       | 33.81         |
| nodejs-express-yoga-no-pav-cache                      | 2629.1     | 319.20       | 22.85         |
| nodejs-express-apollo                                 | 2625.3     | 319.66       | 22.99         |
| nodejs-express-apollo-type-graphql                    | 2548.7     | 321.42       | 22.32         |
| nodejs-nestjs-fastify-apollo                          | 2467.7     | 311.04       | 21.38         |
| nodejs-nestjs-express-apollo                          | 2095.5     | 299.09       | 18.29         |
