// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
  ],
  rules: {
    semi: ['warn', 'always'],

    // 🔥 Warn when using console.log
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    // 🔥 Warn unused variables (with TS awareness)
    '@typescript-eslint/no-unused-vars': ['warn'],

    // 🔥 Warn unused imports and auto-fixable on save/commit
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
};
