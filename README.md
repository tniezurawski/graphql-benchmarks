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
* __Run:__ Tue Nov 05 2024 21:33:11 GMT+0100 (Central European Standard Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000/graphql` (two rounds; one to warm-up, one to measure)

|                                    | Requests/s | Latency (ms) | Throughput/Mb |
| :--                                | --:        | --:          | --:           |
| fastify-mercurius-jit              | 12396.4    | 80.10        | 107.12        |
| bun-fastify-mercurius-jit          | 11779.8    | 84.31        | 101.25        |
| fastify-mercurius-type-graphql-jit | 9724.0     | 102.22       | 84.03         |
| bun-fastify-mercurius              | 6815.7     | 145.96       | 58.59         |
| fastify-mercurius                  | 5755.2     | 172.92       | 49.73         |
| fastify-mercurius-type-graphql     | 5223.8     | 190.50       | 45.14         |
| yoga                               | 4632.6     | 212.12       | 40.03         |
| yoga-type-graphql                  | 4293.1     | 226.57       | 37.09         |
| express-yoga                       | 3732.6     | 255.88       | 32.45         |
| express-yoga-type-graphql          | 3599.9     | 264.58       | 31.29         |
| yoga-no-jit                        | 3390.3     | 279.43       | 29.29         |
| express-yoga-no-jit                | 2670.4     | 319.60       | 23.21         |
| express-apollo                     | 2602.7     | 322.44       | 22.80         |
| express-apollo-jit                 | 2576.2     | 324.78       | 22.56         |
| express-apollo-type-graphql        | 2492.8     | 316.79       | 21.84         |
| express-apollo-type-graphql-jit    | 2472.4     | 313.46       | 21.65         |
