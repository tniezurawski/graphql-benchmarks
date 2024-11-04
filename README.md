<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

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
* __Run:__ Tue Nov 05 2024 00:04:35 GMT+0100 (Central European Standard Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000/graphql` (two rounds; one to warm-up, one to measure)

|                                 | Version    | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                             | --:        | --:    | :-:        | --:          | --:           |
| bare                            | v22.11.0   | ✗      | 134608.8   | 6.93         | 24.01         |
| connect                         | 3.7.0      | ✗      | 128150.4   | 7.31         | 22.85         |
| server-base                     | 7.1.32     | ✗      | 125667.2   | 7.46         | 22.41         |
| polka                           | 0.5.2      | ✓      | 125464.0   | 7.46         | 22.38         |
| h3                              | 1.13.0     | ✗      | 124132.0   | 7.57         | 22.14         |
| micro                           | 10.0.1     | ✗      | 122932.8   | 7.64         | 21.92         |
| rayo                            | 1.4.6      | ✓      | 121763.2   | 7.71         | 21.71         |
| server-base-router              | 7.1.32     | ✓      | 117240.0   | 8.04         | 20.91         |
| connect-router                  | 1.3.8      | ✓      | 117006.4   | 8.05         | 20.87         |
| micro-route                     | 2.5.0      | ✓      | 115329.6   | 8.18         | 20.57         |
| restana                         | 4.9.9      | ✓      | 113670.4   | 8.28         | 20.27         |
| adonisjs                        | 7.2.5      | ✓      | 111027.2   | 8.51         | 19.80         |
| 0http                           | 3.5.3      | ✓      | 109913.6   | 8.61         | 19.60         |
| hono                            | 4.6.8      | ✓      | 108276.8   | 8.74         | 19.31         |
| h3-router                       | 1.13.0     | ✓      | 107776.0   | 8.78         | 19.22         |
| polkadot                        | 1.0.0      | ✗      | 106614.4   | 8.88         | 19.01         |
| koa                             | 2.15.3     | ✗      | 104046.4   | 9.12         | 18.56         |
| koa-isomorphic-router           | 1.0.1      | ✓      | 98840.0    | 9.62         | 17.63         |
| koa-router                      | 12.0.1     | ✓      | 94681.6    | 10.05        | 16.89         |
| take-five                       | 2.0.0      | ✓      | 92182.4    | 10.35        | 33.14         |
| restify                         | 11.1.0     | ✓      | 91254.4    | 10.44        | 16.45         |
| hapi                            | 21.3.12    | ✓      | 86243.2    | 11.09        | 15.38         |
| microrouter                     | 3.1.3      | ✓      | 79552.0    | 12.09        | 14.19         |
| fastify                         | 5.1.0      | ✓      | 73046.4    | 13.19        | 17.97         |
| fastify-big-json                | 5.1.0      | ✓      | 24182.0    | 40.83        | 278.25        |
| express                         | 5.0.1      | ✓      | 22358.0    | 44.20        | 3.99          |
| express-with-middlewares        | 5.0.1      | ✓      | 20158.4    | 49.09        | 7.50          |
| fastify-mercurius-jit           | 0.8.7      | ✗      | 12483.8    | 79.53        | 107.89        |
| fastify-mercurius               | 15.1.0     | ✗      | 5659.5     | 175.81       | 48.91         |
| express-apollo-jit              | 0.8.7      | ✗      | 2592.2     | 322.76       | 22.70         |
| express-apollo                  | 4.11.2     | ✗      | 2588.7     | 323.18       | 22.67         |
| express-apollo-type-graphql     | 2.0.0-rc.2 | ✗      | 2505.8     | 320.06       | 21.95         |
| express-apollo-type-graphql-jit | 0.8.7      | ✗      | 2497.3     | 316.22       | 21.87         |
| trpc-router                     | 10.45.2    | ✓      | N/A        | N/A          | N/A           |
