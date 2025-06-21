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

## Verification

To verify that the application builds and launches correctly in production mode,
run:

```bash
npm run verify
```

This script builds the React application and starts Electron in a headless
environment for a few seconds to ensure no startup errors occur.
