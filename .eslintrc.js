module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:import/recommended',
    'airbnb-typescript/base',
  ],
  ignorePatterns: [
    'dist',
  ],
};