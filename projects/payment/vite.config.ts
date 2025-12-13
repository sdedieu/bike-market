import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const origin = 'http://localhost:4204';
const component = fileURLToPath(new URL('./src/bootstrap.tsx', import.meta.url));
const remoteEntry = (outFileName: string) => ({
  name: 'payment',
  shared: [],
  exposes: [{ key: './component', outFileName }],
});

// Payment owns its React runtime; the Angular shell only imports the web component.
function nativeFederationEntry(): Plugin {
  return {
    name: 'payment-native-federation-entry',
    configureServer(server) {
      server.middlewares.use('/remoteEntry.json', (_req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(remoteEntry('src/bootstrap.tsx')));
      });
    },
    generateBundle(_options, bundle) {
      const entry = Object.values(bundle).find(
        (output) => output.type === 'chunk' && output.facadeModuleId === component,
      );
      if (!entry) throw new Error('Payment federation entry was not emitted');
      this.emitFile({
        type: 'asset',
        fileName: 'remoteEntry.json',
        source: JSON.stringify(remoteEntry(entry.fileName), null, 2),
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), nativeFederationEntry()],
  server: { host: 'localhost', port: 4204, strictPort: true, cors: true, origin },
  preview: { host: 'localhost', port: 4204, strictPort: true, cors: true },
  build: {
    outDir: '../../dist/payment',
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        index: fileURLToPath(new URL('./index.html', import.meta.url)),
        component,
      },
      preserveEntrySignatures: 'exports-only',
    },
  },
});
