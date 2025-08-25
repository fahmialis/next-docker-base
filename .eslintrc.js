// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser', // 👈 use TS parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals', // 👈 Next.js ESLint rules
  ],
  rules: {
    semi: ['warn', 'always'],
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};
