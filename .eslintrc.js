module.exports = {
  root: true,
  parserOptions: {
    project: "tsconfig.json",
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
    '.eslintrc.js',
  ],
};