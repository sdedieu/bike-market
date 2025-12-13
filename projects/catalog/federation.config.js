const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  name: 'catalog',

  exposes: {
    './component': './projects/catalog/src/bootstrap.ts',
    './banner': './projects/catalog/src/bootstrap-banner.ts',
    './routes': './projects/catalog/src/app/app.routes.ts',
    './app': './projects/catalog/src/app/app.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    '@tailwindcss/node',
    '@tailwindcss/oxide',
    '@tailwindcss/oxide-darwin-arm64',
    '@tailwindcss/vite',
    'openai',
    // Add further packages you don't need at runtime
  ],
});
