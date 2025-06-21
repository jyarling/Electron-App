# Electron ACARS Viewer

This project provides a minimal Electron application bundled with a React + Vite
front‑end. It serves as a starting point for displaying ACARS information from
Flight Simulator.

## Development

Install dependencies and start the development environment:

```bash
npm install
npm run dev
```

This command runs the React development server and launches Electron once the
app is available on <http://localhost:5173>.

## Building

Create a packaged build with:

```bash
npm run dist
```

The compiled files will be produced using `electron-builder`.

## Testing the Application

After cloning or downloading the repository you can verify that everything works
by running the application in development mode. Make sure you have a recent
version of Node.js installed and then follow these steps:

```bash
# install dependencies
npm install

# launch the React dev server and Electron
npm run dev
```

Electron will open a window once the Vite dev server is available at
<http://localhost:5173>. You can interact with the UI to confirm that the ACARS
viewer loads correctly.

If you want to test the production build instead, package the app and run the
generated executable:

```bash
npm run dist
# on Windows: dist/win-unpacked/electron-app.exe
# on macOS:   dist/mac/Electron ACARS Viewer.app
```

Launching the packaged application lets you test it in an environment that is
closer to what end users will run.
