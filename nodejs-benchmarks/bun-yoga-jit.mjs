'use strict';
import { exec } from 'child_process';
import path from 'path';

const forked = exec(
  'bun run server-jit.ts',
  { cwd: path.join(import.meta.dirname, '..', 'bun-benchmarks', 'yoga') },
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
forked.on('exit', () => console.log(' bun-yoga-jit exited'));
