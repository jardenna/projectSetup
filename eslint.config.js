import { default as js, default as pluginJs } from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint, { configs as tsConfigs } from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // specify the formats on which to apply the rules below
    files: ['**/*.{ts,tsx}'],
    // use predefined configs in installed eslint plugins
    extends: [
      // js
      js.configs.recommended,
      // ts
      ...tseslint.configs.recommended,
      // react
      react.configs.flat.recommended,
      // import
      importPlugin.flatConfigs.recommended,
      // a11y (accessibility
      jsxA11y.flatConfigs.recommended,
      // prettier
      prettier,
      ...tsConfigs.strictTypeChecked,
    ],

    // specify used plugins
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      perfectionist,
    },
    settings: {
      // for eslint-plugin-react to auto detect react version
      react: {
        version: 'detect',
      },
      // for eslint-plugin-import to use import alias
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      'perfectionist/sort-imports': 'error',
      'prettier/prettier': [
        'error',
        { endOfLine: 'auto' },
        { usePrettierrc: true },
      ], // Use our .prettierrc file as source
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          peerDependencies: true,
        },
      ],
      'react/function-component-definition': [
        2,
        {
          namedComponents: ['arrow-function', 'function-declaration'],
          unnamedComponents: 'arrow-function',
        },
      ],

      curly: ['error', 'all'],
      'arrow-body-style': 'warn',
      'react/no-multi-comp': ['error', { ignoreStateless: false }],
      'react/no-unescaped-entities': 0,
      'no-underscore-dangle': ['error', { allow: ['__esModule', '__extends'] }],
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'jsx-a11y/alt-text': 'error',
      'react/jsx-filename-extension': [
        2,
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'no-console': ['warn', { allow: ['warn'] }],
      'no-warning-comments': [
        'error',
        { terms: ['todo', 'fixme', 'any other term'], location: 'anywhere' },
      ],
      camelcase: 'off',
      'react/destructuring-assignment': 'off',
      'react/button-has-type': 'error',
      'react/prefer-stateless-function': 'warn',
      'react/jsx-props-no-spreading': 'off',
      'react/no-did-update-set-state': 'warn',
      'class-methods-use-this': 'off',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'react/no-array-index-key': 'off',
      'react/no-direct-mutation-state': 1,
      'no-nested-ternary': 'warn',
      'react/require-default-props': [
        'error',
        { ignoreFunctionalComponents: true },
      ],
      'no-param-reassign': [
        'error',
        { props: true, ignorePropertyModificationsFor: ['state'] },
      ],
      'react/jsx-no-bind': [
        'error',
        {
          allowArrowFunctions: true,
          allowFunctions: true,
        },
      ],
      'import/prefer-default-export': 'warn',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/html-has-lang': ['error'],
      'jsx-a11y/img-redundant-alt': [
        2,
        {
          components: ['Image'],
          words: ['Bild', 'Foto', 'Billede'],
        },
      ],
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          labelComponents: ['Label'],
          labelAttributes: ['for'],
          controlComponents: ['Input'],
          depth: 4,
        },
      ],
    },
  },
);
