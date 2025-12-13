const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  name: 'recommendations',

  exposes: {
    './recommendations-full': './projects/recommendations/src/main/recommendations-full.routes.ts',
    './brand-banner': './projects/recommendations/src/banner/brand-banner.routes.ts',
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
