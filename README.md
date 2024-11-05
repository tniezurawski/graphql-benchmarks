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
* __Run:__ Tue Nov 05 2024 09:04:56 GMT+0100 (Central European Standard Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000/graphql` (two rounds; one to warm-up, one to measure)

|                                 | Requests/s | Latency (ms) | Throughput/Mb |
| :--                             | :-:        | --:          | --:           |
| fastify-mercurius-jit           | 12238.0    | 81.13        | 105.76        |
| fastify-mercurius               | 5715.1     | 174.13       | 49.39         |
| express-apollo-jit              | 2576.2     | 324.78       | 22.56         |
| express-apollo                  | 2570.9     | 322.55       | 22.52         |
| express-apollo-type-graphql     | 2492.8     | 316.79       | 21.84         |
| express-apollo-type-graphql-jit | 2472.4     | 313.46       | 21.65         |
