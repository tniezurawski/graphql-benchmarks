'use strict';
const { exec } = require('child_process');
const path = require('path');

const forked = exec(
  'node main.js',
  { cwd: path.join(__dirname, 'nestjs-fastify-mercurius-jit', 'dist') },
  (error, stdout, stderr) => {
    if (error) {
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    if (stdout) {
      console.log(`stdout: ${stdout}`);
      return;
    }
  },
);
process.on('SIGINT', () => forked.kill());
forked.on('exit', () => console.log(' nestjs-fastify-mercurius-jit exited'));
