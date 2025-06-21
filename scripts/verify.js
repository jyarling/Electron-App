const { spawn } = require('child_process');

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, { stdio: 'inherit', ...options });
    proc.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${command} exited with code ${code}`));
      }
    });
  });
}

(async () => {
  try {
    console.log('\nBuilding React application...');
    await run('npm', ['run', 'build']);

    console.log('\nLaunching Electron application...');
    const env = { ...process.env, NODE_ENV: 'production' };
    const electronArgs = ['-a', 'npx', 'electron', '.', '--no-sandbox'];
    const electron = spawn('xvfb-run', electronArgs, { env, stdio: 'inherit' });

    const timeout = setTimeout(() => {
      electron.kill('SIGTERM');
    }, 5000);

    await new Promise((resolve, reject) => {
      electron.on('exit', (code, signal) => {
        clearTimeout(timeout);
        if (code === 0 || signal === 'SIGTERM') {
          resolve();
        } else {
          reject(new Error(`Electron exited with code ${code}`));
        }
      });
      electron.on('error', reject);
    });

    console.log('Verification succeeded.');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();
