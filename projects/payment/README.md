# Payment

React SPA built with Vite and the official React plugin.

From the repository root:

- `npm run payment:start`: Vite development server with React Fast Refresh at http://localhost:4204.
- `npm run payment:build`: type-check and build into `dist/payment`.
- `npm run payment:watch`: rebuild production assets when source files change.
- `npm --prefix projects/payment run preview`: serve the production build on port 4204.

The standalone app redirects to `/payment/child-a`; both child routes support direct navigation and refresh. Vite handles the SPA fallback.

`vite.config.ts` emits Native Federation metadata exposing `./component`. Development points to the Vite-served source module; production points to the hashed JavaScript entry. The Angular shell keeps its existing manifest and web-component loader. Payment bundles its own React and router dependencies (`shared: []`).

The bootstrap imports the React Refresh preamble because a federated mount does not load payment's HTML document. The custom element mounts a React root and unmounts it when removed.

Run production builds separately from Angular development servers: Native Federation uses shared output directories which a production build can overwrite.
