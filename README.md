# Benchmarks

* __Machine:__ darwin arm64 | 10 vCPUs | 16.0GB Mem
* __Node:__ `v22.11.0`
* __Run:__ Tue Nov 05 2024 08:45:04 GMT+0100 (Central European Standard Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000/graphql` (two rounds; one to warm-up, one to measure)

|                                 | Version    | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                             | --:        | --:    | :-:        | --:          | --:           |
| fastify-mercurius-jit           | 0.8.7      | ✗      | 12641.6    | 78.54        | 109.25        |
| fastify-mercurius               | 15.1.0     | ✗      | 5778.9     | 172.19       | 49.94         |
| express-apollo                  | 4.11.2     | ✗      | 2626.3     | 324.30       | 23.00         |
| express-apollo-jit              | 0.8.7      | ✗      | 2593.7     | 319.68       | 22.72         |
| express-apollo-type-graphql     | 2.0.0-rc.2 | ✗      | 2550.0     | 324.10       | 22.34         |
| express-apollo-type-graphql-jit | 0.8.7      | ✗      | 2451.6     | 309.09       | 21.47         |

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
