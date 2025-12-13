const {
  withNativeFederation,
  shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: 'sales',

  exposes: {
    './component': './src/sales/bootstrap',
    './banner': './src/banner/bootstrap-banner',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
      includeSecondaries: false,
    }),
  },

  skip: ['@tailwindcss/postcss', 'postcss'],
});
