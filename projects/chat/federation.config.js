const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  name: 'chat',

  exposes: {
    './component': './projects/chat/src/bootstrap.ts',
  },

  shared: {
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],
});
