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
* __Bun:__ `v1.1.38`
* __Deno:__ `v2.1.3`
* __Run:__ Sat Dec 07 2024 16:55:11 GMT+0100 (Central European Standard Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000/graphql` (two rounds; one to warm-up, one to measure)

|                                                       | Requests/s | Latency (ms) | Throughput/Mb |
| :--                                                   | --:        | --:          | --:           |
| nodejs-fastify-mercurius-jit                          | 12754.2    | 77.84        | 110.22        |
| nodejs-fastify-mercurius-pothos-jit                   | 12433.2    | 79.85        | 107.45        |
| deno-yoga-jit                                         | 12092.0    | 82.13        | 104.21        |
| bun-fastify-mercurius-jit                             | 11745.8    | 84.56        | 100.97        |
| bun-yoga-jit                                          | 11057.8    | 89.84        | 95.05         |
| nodejs-yoga-jit                                       | 10941.2    | 90.81        | 94.55         |
| nodejs-fastify-mercurius-type-graphql-jit             | 9991.8     | 99.47        | 86.35         |
| nodejs-nestjs-fastify-mercurius-jit-deparentification | 9904.6     | 100.34       | 85.59         |
| deno-fastify-mercurius-jit                            | 9608.6     | 103.46       | 82.81         |
| nodejs-nestjs-fastify-mercurius-jit                   | 7679.1     | 129.54       | 66.36         |
| bun-yoga                                              | 7501.2     | 132.62       | 64.48         |
| bun-fastify-mercurius                                 | 6784.0     | 146.67       | 58.32         |
| nodejs-express-yoga-jit                               | 6765.6     | 147.03       | 58.81         |
| nodejs-fastify-mercurius                              | 5786.2     | 172.00       | 50.00         |
| deno-yoga                                             | 5773.2     | 172.40       | 49.75         |
| nodejs-fastify-mercurius-pothos                       | 5712.1     | 174.21       | 49.36         |
| nodejs-fastify-mercurius-type-graphql                 | 5472.2     | 181.86       | 47.29         |
| nodejs-yoga                                           | 5443.6     | 182.81       | 47.04         |
| nodejs-yoga-type-graphql                              | 5332.6     | 186.61       | 46.08         |
| bun-graphql-http                                      | 5319.1     | 187.08       | 45.72         |
| nodejs-fastify-mercurius-open-telemetry-irs           | 4976.9     | 198.96       | 43.01         |
| deno-fastify-mercurius                                | 4828.4     | 206.12       | 41.60         |
| nodejs-express-yoga                                   | 4352.3     | 224.05       | 37.83         |
| nodejs-express-yoga-pothos                            | 4124.5     | 235.19       | 35.85         |
| nodejs-koa-graphql-api                                | 3925.4     | 245.21       | 33.89         |
| nodejs-nestjs-fastify-mercurius                       | 3915.6     | 245.83       | 33.83         |
| nodejs-yoga-no-pav-cache                              | 3913.3     | 245.96       | 33.81         |
| nodejs-graphql-http                                   | 3843.1     | 249.82       | 33.27         |
| nodejs-express-yoga-type-graphql                      | 3625.2     | 262.74       | 31.51         |
| nodejs-graphql-http-type-graphql                      | 3580.5     | 266.84       | 31.00         |
| nodejs-express-graphql-http                           | 3157.2     | 293.71       | 27.40         |
| nodejs-express-graphql-http-type-graphql              | 3037.1     | 300.35       | 26.36         |
| nodejs-koa-apollo                                     | 2963.5     | 304.39       | 25.81         |
| nodejs-fastify-mercurius-open-telemetry-itrs          | 2772.8     | 314.48       | 23.96         |
| nodejs-express-yoga-no-pav-cache                      | 2629.1     | 319.20       | 22.85         |
| nodejs-express-apollo                                 | 2612.8     | 321.22       | 22.88         |
| nodejs-express-apollo-pothos                          | 2587.5     | 323.40       | 22.66         |
| nodejs-express-apollo-type-graphql                    | 2478.8     | 316.60       | 21.71         |
| nodejs-nestjs-fastify-apollo                          | 2467.7     | 311.04       | 21.38         |
| nodejs-express-apollo-open-telemetry-irs              | 2313.2     | 300.96       | 20.26         |
| nodejs-nestjs-express-apollo                          | 2095.5     | 299.09       | 18.29         |
| nodejs-nestjs-express-apollo-open-telemetry           | 1553.0     | 377.26       | 13.56         |
| nodejs-fastify-mercurius-open-telemetry               | 751.6      | 462.82       | 6.50          |
| nodejs-express-apollo-open-telemetry-itrs             | 648.4      | 535.70       | 5.68          |
| nodejs-express-apollo-open-telemetry                  | 641.5      | 526.25       | 5.62          |
