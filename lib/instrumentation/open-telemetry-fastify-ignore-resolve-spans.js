// Followed this: https://www.apollographql.com/docs/federation/v1/opentelemetry

// Import required symbols
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { FastifyInstrumentation } from '@opentelemetry/instrumentation-fastify';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { NodeTracerProvider } from '@opentelemetry/node';
// import {
//   SimpleSpanProcessor,
//   ConsoleSpanExporter,
// } from '@opentelemetry/tracing';
import { Resource } from '@opentelemetry/resources';
import { GraphQLInstrumentation } from '@opentelemetry/instrumentation-graphql';

// Register server-related instrumentation
registerInstrumentations({
  instrumentations: [
    new HttpInstrumentation(),
    new FastifyInstrumentation(),
    new GraphQLInstrumentation({
      ignoreResolveSpans: true,
    }),
  ],
});

// Initialize provider and identify this particular service
// (in this case, we're implementing a federated gateway)
const provider = new NodeTracerProvider({
  resource: Resource.default().merge(
    new Resource({
      // Replace with any string to identify this service in your system
      'service.name': 'gateway',
    }),
  ),
});

// Here you'd add a span processor. For benchmarking purposes I haven't added any.
// I used console exporter to debug if it's really working.
// const consoleExporter = new ConsoleSpanExporter();
// provider.addSpanProcessor(new SimpleSpanProcessor(consoleExporter));

// Register the provider to begin tracing
provider.register();
