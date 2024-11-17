'use strict';
import { exec } from 'child_process';
import path from 'path';

const forked = exec(
  'deno run --allow-env --allow-net --allow-read --allow-sys server.ts',
  {
    cwd: path.join(
      import.meta.dirname,
      '..',
      'deno-benchmarks',
      'fastify-mercurius',
    ),
  },
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    if (stdout) {
      console.log(`stdout: ${stdout}`);
    }
  },
);
process.on('SIGINT', () => {
  forked.kill();
});
forked.on('exit', () => console.log(' deno-fastify-mercurius exited'));
