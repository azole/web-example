const pluginPrettier = require('eslint-plugin-prettier');
const globals = require('globals');

module.exports = [
  {
    files: ['**/*.js'],
    ignores: ['node_modules', 'dist'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },

    linterOptions: {
      reportUnusedDisableDirectives: true,
    },

    plugins: {
      prettier: pluginPrettier,
    },

    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'prettier/prettier': 'warn',
    },
  },
];
