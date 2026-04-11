import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules/**', 'client/**', 'uploads/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        process: 'readonly',
        console: 'readonly',
        Buffer: 'readonly',
        File: 'readonly',
      },
    },
    rules: {
      ...prettierConfig.rules,
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
